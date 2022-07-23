import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyDescriptionWrapper, PropertyImageWrapper, PropertyInfoWrapper, PropertyValueWrapper } from "./style";
import { getStaticImage } from "../../../../utils/StacticImage";
import { getCityZoneLabel } from "../../../../utils/GetDataConstants";
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat";

export const PropertyCard = (props) => {
  
  return (  
    
    <PropertyCardWrapper to={`/PropertyDetail/${props._id}`} >
      <PropertyImageWrapper>
        <img alt='foto propiedad' 
             //src={`Imagenes/${props.mainImage}`}
              src={getStaticImage(props.mainImage)}
        />
      </PropertyImageWrapper>

      <PropertyInfoWrapper>       
         
           <h3>{props.title}</h3>
         
         <SubTitle>
           {props.shortDescription}
         </SubTitle>
         <PropertyDescriptionWrapper>          
           {getCityZoneLabel(props.city, props.zone)}
         </PropertyDescriptionWrapper>
        
         <PropertyTypeLabel 
            typeId= {props.propertyType}
          />         
        
         <PropertyBusinessType
            busineesType = {props.bussinessType}
         />

         <PropertyDescriptionWrapper>
          <PropertyValueWrapper>
            {getCurrencyFormat(props.value)} 
           </PropertyValueWrapper>
           <p>{props.description}</p>
         </PropertyDescriptionWrapper>        
      </PropertyInfoWrapper>      
    </PropertyCardWrapper>  
    
  )
}