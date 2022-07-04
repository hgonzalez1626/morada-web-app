import { useState } from 'react'
import useProperty from "../../../../hooks/useProperty";
import { PropertyPreview } from "../PropertyPreview";
import { PropertyInfoWrapper, PropertyGalleryWrapper, PropertyTypeDetailWrapper } from "./styles";

export const PropertyDeatail = () => {
    
    const { properties } = useProperty();
    const [ estado, setEstado ] = useState(false)
    
    //* Funcionamiento Inserte este metodo por tiempo de carga de proerties
    const Cargar = ()=>{
        setTimeout(()=>{            
             //console.log('CANT:', properties)              
             setEstado(true)
             //console.log(estado)
        }, 2000)           
    }

    return(        
        <PropertyTypeDetailWrapper>
            
            <PropertyGalleryWrapper>          
                <img alt='Apartamento' 
                    src='https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg'
                />                                        
            </PropertyGalleryWrapper>

            <PropertyInfoWrapper>
                <h1>
                {estado ?
                    properties.data.map(property => (
                        <PropertyPreview 
                            key={property._id}
                            property = {property}                            
                        />
                    ))                    
                    :Cargar()
                  } 
                </h1>                             
            </PropertyInfoWrapper>
        </PropertyTypeDetailWrapper>        
    )
}