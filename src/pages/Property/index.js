import { useState } from 'react'
import useProperty from "../../hooks/useProperty"
import { useAuth } from "../../hooks/useAuth";
import { PropertyPreview } from './components/PropertyPreview';
import { PropertyTitleWrapper, PropertyTypeContainerDetail, PropertyWrapper } from "./styles";
import { PropertyTypeWelcomeWrapper } from '../Home/components/PropertyWelcome/styles';

export const Property = () => {

    const { properties } = useProperty();
    const { auth } = useAuth();   
    const [ estado, setEstado ] = useState(false)    
    
    //* Funcionamiento Inserte este metodo por tiempo de carga de properties
    const Cargar = ()=>{
        setTimeout(()=>{            
             //console.log('CANT:', properties)              
             setEstado(true)
             //console.log(estado)
        }, 300)           
    }
    return(
       
            <PropertyWrapper> 
                <PropertyTitleWrapper>
                    <h1>Propiedades De: "<span>{auth.data?auth.data.name:''}"</span> </h1>
                </PropertyTitleWrapper>
                <PropertyTypeContainerDetail>
                {estado ?
                    properties.data.map(property => (
                        <PropertyPreview
                            key={property._id}
                            property = {property}                            
                        />
                    ))                    
                    :Cargar()
                } 
                </PropertyTypeContainerDetail>                
            </PropertyWrapper>        
     
        
    )
}