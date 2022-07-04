import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { requestHttp } from "../utils/HttpRequest";
import { showAlert, SW_ICON } from "../utils/swAlert";


const PropertyContext = createContext();

const PropertyProvider = ({children})=>{

    const [ properties, setProperties ] = useState([]);
    const [ propertiesAll, setPropertiesAll ] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        const getProperties = async ()=>{
            try {
                const token = localStorage.getItem('token')
                if(!token)return
                                    
                const response = await requestHttp(
                    {
                        endpoint: '/properties/Owner',
                        method: 'get',                        
                        token: token
                    }
                );          
                setProperties(response)       
                            
            } catch (error) {
                console.log(error)
            }
        }
        getProperties();
    }, [])

    useEffect(()=>{
        const getPropertiesAll = async ()=>{
            try {                                                   
                const response = await requestHttp(
                    {
                        endpoint: '/properties',
                        method: 'get', 
                        params: {propertyType: 1}                                       
                    }
                );          
                setPropertiesAll(response)       
                            
            } catch (error) {
                console.log(error)
            }
        }
        getPropertiesAll();
    }, [])

    const submitProperties = async property =>{
        try {   
            const token = localStorage.getItem('token')
            if(!token)return
                                   
            const response = await requestHttp(
                {
                    endpoint: '/properties',
                    body: property,
                    token: token
                }
            );
            //*Funcionamiento del estate no esta dando para que me cargue todo al ir a propiedades
            //setProperties([...properties, response])
                                          
            showAlert(
                'Creado', 
                "Propiedad Creada Correctamente", 
                SW_ICON.SUCCESS,
                () => { navigate('/Property')}    
            );
            
            
        } catch (error) {                    
            showAlert('Error', "Datos Incorrectos", SW_ICON.ERROR);
        } 
    }

    const submitPropertiesFilters = async filter =>{
        try {
            const response = await requestHttp(
                {
                    endpoint: '/properties',
                    method: 'get', 
                    params: filter                                       
                }
            );          
            setPropertiesAll(response)   
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <PropertyContext.Provider
            value={{
                properties,
                propertiesAll,
                submitProperties,
                submitPropertiesFilters
            }}
        >
            {children}
        </PropertyContext.Provider>
    )
}

export {
    PropertyProvider
}

export default PropertyContext;


