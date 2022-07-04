import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyDescriptionWrapper, PropertyImageWrapper, PropertyInfoWrapper } from "./style";

export const PropertyCard = ({property}) => {
  const { title, 
    city, 
    zone, 
    propertyType, 
    bussinessType, 
    mainImage, 
    value, 
    description, 
    shortDescription, 
    _id } = property
   //* Funcionamiento "No me esta cargando al enviarlo por props al  PropertyBusinessType y PropertyTypeLabel"
   //* Funcionamiento "Cargar las imagenes desde BD"
  return (  
    <PropertyCardWrapper >
      <PropertyImageWrapper>
        <img alt='Apartamento' 
             src='https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg'
        />
      </PropertyImageWrapper>

      <PropertyInfoWrapper>
         <a href="/Property">
           <h3>{title}</h3>
         </a>
         <SubTitle>
           {shortDescription}
         </SubTitle>
         <PropertyDescriptionWrapper>
           {zone}, {city}
         </PropertyDescriptionWrapper>
        
         <PropertyTypeLabel>
           <p>{propertyType}</p>
         </PropertyTypeLabel>
        
         <PropertyBusinessType>
           <p>{bussinessType}</p>
         </PropertyBusinessType>
         <PropertyDescriptionWrapper>
           ${value}
           <p>{description}</p>
         </PropertyDescriptionWrapper>        
      </PropertyInfoWrapper>      
    </PropertyCardWrapper>   
  )
}


 
