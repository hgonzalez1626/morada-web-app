import { PropertyBusinessType } from "../../../../components/PropertyBusinessType";
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel";
import { SubTitle } from "../../../../globalStyles";
import { PropertyCardWrapper, PropertyImageWrapper, PropertyInfoWrapper } from "./style";


export const PropertyCard = () => (
  
    <PropertyCardWrapper >
      <PropertyImageWrapper>
        <img alt='Apartamento' 
             src='https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg'
        />
      </PropertyImageWrapper>

      <PropertyInfoWrapper>
        <a href="/Property">
          <h3>Apartamento en Laureles</h3>
        </a>
        <SubTitle>
          Laureles, Medellín
        </SubTitle>
        
        <PropertyTypeLabel>
          <p>Apartamento</p>
        </PropertyTypeLabel>
        
        <PropertyBusinessType>
          <p>Venta</p>
        </PropertyBusinessType>
        
        <p>$750.000.000</p>
      </PropertyInfoWrapper>
      
    </PropertyCardWrapper>
   
)


 
