import { useState, useEffect, createContext } from "react";
import { HTTP_VERBS, requestHttp } from "../utils/HttpRequest";

const initialState = { 
    title: '', 
    city: 0, 
    zone: 0, 
    propertyType: 0, 
    bussinessType: 0, 
    mainImage: '', 
    value: 0, 
    description: '', 
    shortDescription:'', 
    _id: '' 
};

export const PropertyContext = createContext(initialState);

export const PropertyContextStore = (props)=>{    

    const [ properties, setProperties ] = useState([]);
    const [ propertiesAll, setPropertiesAll ] = useState(initialState);

    useEffect(()=>{
        const getPropertiesAll = async ()=>{
            try {                                                   
                const response = await requestHttp(
                    {
                        method: HTTP_VERBS.GET,
                        endpoint: '/properties',                         
                        params: {propertyType: 1}                                       
                    }
                ); 
                
                const {data} = response;                
                setPropertiesAll(data);       
                            
            } catch (error) {
                console.log(error)
            }
        }
        getPropertiesAll();
    }, [])

    const submitPropertiesFilters = async filter =>{
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,
                    endpoint: '/properties',                   
                    params: filter                                       
                }
            );          
            const {data} = response;            
            setPropertiesAll(data);  
        } catch (error) {
            console.log(error)
        }
    }
    
    return(
        <PropertyContext.Provider
            value={{
                properties,
                propertiesAll,                
                submitPropertiesFilters
            }}
        >
            { props.children}
        </PropertyContext.Provider>
    )
};


