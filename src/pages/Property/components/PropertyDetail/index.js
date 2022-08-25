import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HTTP_VERBS, requestHttp } from "../../../../utils/HttpRequest";
import {
    PropertyInfoWrapper,
    PropertyGalleryWrapper,
    PropertyTypeDetailWrapper,
    PropertyDetail_Global_DOS,
    PropertyDetail_Global,
    PropertyDetail_Options
} from "./styles";
import { getStaticImage } from "../../../../utils/StacticImage";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
import { getPropertyTypeLabel } from "../../../../utils/GetDataConstants";
import { getBusinessTypeLabel } from "../../../../utils/GetDataConstants";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";
import { Page } from "../../../../components/Page";
import { IoStar, IoAddCircle, IoSend, IoHome } from 'react-icons/io5'
import { PropertyTypeButton } from "../../../Home/components/PropertyTypeButton";
import { UserContext } from "../../../../context/UserContext";
import { PropertyProfile } from "../PropertyProfile";
import { PropertyTypesContainerHead } from "../PropertyProfile/styles";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FormControlAction, FormControlActionProperty } from "../../../../globalStyles";
import { ButtonIcon } from "../../../../components/ButtonIcon";
import { showAlert, SW_ICON } from "../../../../utils/swAlert";
import { getToken } from "../../../../utils/TokenLS";

const PropertiesRequest = [
    { id: 1, icon: IoStar, label: '' },
    { id: 2, icon: IoAddCircle, label: 'Estoy interesado' },
];

export const PropertyDetail = () => {

    const { user } = useContext(UserContext)

    // console.log({user})

    const { id } = useParams()
    const [property, setProperty] = useState([]);
    const [datarequest, setDataRequest] = useState('');

    useEffect(() => {
        getProperty();
    }, [])

    const getProperty = async () => {
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,
                    endpoint: `/properties/${id}`
                }
            );
            const { data } = response;
            setProperty(data);
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const addfavorite = async () => {
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.POST,
                    endpoint: `/favorites/${id}`,
                    token: getToken()
                }
            );
            const { data } = response;
            console.log(data)
            showAlert(
                'Propiedad',
                'Agregada a favoritos con exito',
                SW_ICON.SUCCESS
            );
        } catch (error) {
            showAlert('Gracias!', "Propiedad ya se encuentra agregado a tus Favoritos", SW_ICON.INFO);
        }
    }

    const handleSubmit = async e =>{
        e.preventDefault(); 
        if([datarequest].includes('')){
            showAlert('Error', "No has colocado un comentario, para enviar esta solicitud", SW_ICON.ERROR);               
            return;   
        }
        //const comments = {};
       const comments = { 'comments': datarequest}
        //comments['comments'] = dataRequest;
        console.log({comments})
    }

    const addRequest = async (e) => {
        e.preventDefault(); 
        if([datarequest].includes('')){
            showAlert('Error', "No has colocado un comentario, para enviar esta solicitud", SW_ICON.ERROR);              
            return;   
        }
        const comments = { 'comments': datarequest}
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.POST,
                    endpoint: `/request/${id}`,
                    body: comments,
                    token: getToken()
                }
            );
            const { data } = response;
            console.log(response.data)
            showAlert(
                'Solicitud',
                'Enviada con exito',
                SW_ICON.SUCCESS
            );
        } catch (error) {
            console.log(
            showAlert('Error!', error.response.data), SW_ICON.ERROR);
        }
    }

    return (

        <PropertyDetail_Global>
            <PropertyDetail_Global_DOS>
                <PropertyTypesContainerHead>
                    <PropertyProfile
                        lblNameClient={user.isAuthenticated ? user.name : 'Usuario no registrado'}
                    />
                </PropertyTypesContainerHead>
                <PropertyTypeDetailWrapper>

                    <PropertyGalleryWrapper>
                        <img alt='foto propiedad'
                            src={getStaticImage(property.mainImage)}
                        />
                    </PropertyGalleryWrapper>

                    <PropertyInfoWrapper>
                        <h1>
                            {property.title}
                        </h1>

                        <h2>{property.shortDescription}</h2>

                        <h2>{getCityZoneLabel(property.city, property.zone)}</h2>
                        <br />
                        <h3>{getPropertyTypeLabel(property.propertyType)} - {getBusinessTypeLabel(property.bussinessType)}: {getCurrencyFormat(property.value)}</h3>
                        <h3>{property.description}</h3>
                        <br />
                        <PropertyDetail_Options>
                            {user.isAuthenticated ?
                                <FormControlActionProperty>
                                    <div className="favorite"><ButtonIcon icon={IoStar} onPress={addfavorite} /></div>
                                    <div className="request"><ButtonIcon icon={IoSend} onPress={addRequest} /></div>
                                    <textarea value={datarequest}
                                        onChange={e => setDataRequest(e.target.value)}
                                        placeholder="Si estas interesado, escribe aqui tu solicitud y luego da click en enviar!!!">
                                    </textarea>

                                </FormControlActionProperty>
                                : <a href="/Login" >¿Para agregar favoritos y enviar una solicitud de interes?<span> " Inicia seccion "</span> </a>
                            }
                        </PropertyDetail_Options>
                    </PropertyInfoWrapper>
                </PropertyTypeDetailWrapper>
            </PropertyDetail_Global_DOS>
        </PropertyDetail_Global>

    )
}