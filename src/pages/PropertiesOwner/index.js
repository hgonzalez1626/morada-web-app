import { useContext, useEffect, useState } from 'react'
import { Page } from "../../components/Page"
import { PropertiesOwnerTitleWrapper, PropertiesOwnerTypeContainerDetail, PropertiesOwnerWrapper } from './styles';
import { PropertiesOwnerPreview } from './components/PropertiesOwnerPreview';
import { UserContext } from '../../context/UserContext';
import { getToken } from '../../utils/TokenLS';
import { HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';


export const PropertiesOwner = () => {

    const { user } = useContext(UserContext)
    const [propertiesOwner, setPropertiesOwner] = useState([])
    const [estado, setEstado] = useState(false)

    //console.log(propertiesOwner);

    useEffect(() => {
        const getPropertiesOwner = async () => {
            try {
                const token = getToken()
                if (!token) return
                const response = await requestHttp(
                    {
                        method: HTTP_VERBS.GET,
                        endpoint: '/properties/Owner',
                        token: token
                    }
                );
                const { data } = response;
                setPropertiesOwner(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPropertiesOwner();
    }, [])

    //* Funcionamiento Inserte este metodo por tiempo de carga de properties
    const Cargar = () => {
        setTimeout(() => {
            //console.log('CANT:', properties)              
            setEstado(true)
            //console.log(estado)
        }, 300)
    }

    return (
        <Page>
            <PropertiesOwnerWrapper>
                <PropertiesOwnerTitleWrapper>
                    <h1>Propiedades De La Inmobiliaria: "<span>{user.isAuthenticated ? user.name : ''}"</span> </h1>
                </PropertiesOwnerTitleWrapper>
                <PropertiesOwnerTypeContainerDetail>
                    {estado ?
                        propertiesOwner.map(property => (
                            <PropertiesOwnerPreview
                                key={property._id}
                                property={property}
                            />
                        ))
                        : Cargar()
                    }
                </PropertiesOwnerTypeContainerDetail>
            </PropertiesOwnerWrapper>
        </Page>
    )
};