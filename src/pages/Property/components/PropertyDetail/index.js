import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HTTP_VERBS, requestHttp } from "../../../../utils/HttpRequest";
import { PropertyInfoWrapper, PropertyGalleryWrapper, PropertyTypeDetailWrapper, PropertyDetail_Global_DOS, PropertyDetail_Global, PropertyDetail_Options } from "./styles";
import { getStaticImage } from "../../../../utils/StacticImage";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
import { getPropertyTypeLabel } from "../../../../utils/GetDataConstants";
import { getBusinessTypeLabel } from "../../../../utils/GetDataConstants";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";
import { Page } from "../../../../components/Page";
import { IoStar, IoAddCircle, IoHome } from 'react-icons/io5'
import { PropertyTypeButton } from "../../../Home/components/PropertyTypeButton";

const PropertiesRequest = [
    { id: 1, icon: IoStar, label:'Agregar a Favoritos'},
    { id: 2, icon: IoAddCircle, label:'Estoy interesado'},
    { id: 3, icon: IoHome, label:'Ir al Inicio...'},     
];

export const PropertyDetail = () => {

    const {id} = useParams()
    const [property, setProperty] = useState([]);    

    useEffect(() => {               
        getProperty();           
    },[])

    const getProperty = async () =>{
        try {                
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,                    
                    endpoint: `/properties/${id}`                        
                }
            );
            const {data} = response;
            setProperty(data);  
            console.log(data)               
        } catch (error) {
            console.log(error)
        }
    } 

return(
   
    <PropertyDetail_Global>
        <PropertyDetail_Global_DOS>
            <PropertyTypeDetailWrapper>        
                <PropertyGalleryWrapper>          
                    <img alt='foto propiedad'              
                        src={getStaticImage(property.mainImage)}              
                    />                                        
                </PropertyGalleryWrapper>

                <PropertyInfoWrapper>
                    <h1>{property.title}</h1>                    
                    <h2>{property.shortDescription}</h2>            
                    
                    <h2>{getCityZoneLabel(property.city, property.zone)}</h2> 
                    <br/>            
                    <h3>{getPropertyTypeLabel(property.propertyType)} - {getBusinessTypeLabel(property.bussinessType)}: {getCurrencyFormat(property.value)}</h3>                     
                    <h3>{property.description}</h3>  
                    <br/>         
                    
                </PropertyInfoWrapper>
                <PropertyDetail_Options>
                {          
                PropertiesRequest.map((item, key) => 
                    <PropertyTypeButton
                        key={key}                         
                        icon={item.icon} 
                        label={item.label}
                        id={item.id}                        
                    /> )
                }
                </PropertyDetail_Options>        
            </PropertyTypeDetailWrapper>
        </PropertyDetail_Global_DOS>
    </PropertyDetail_Global>
   
)
}