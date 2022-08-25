import { PropertyProfileWrapper, PropertyTypeImageWrapper, PropertyTypeLabelWrapper } from "./styles"; 

export const PropertyProfile = ({ lblNameClient}) =>(
    <PropertyProfileWrapper>
        
        <PropertyTypeImageWrapper>
           
        </PropertyTypeImageWrapper>
        
        <PropertyTypeLabelWrapper>
            <h3>Hi,</h3>
            <h2>
                <label>{lblNameClient || "Nombre del Cliente o Proveedor"}</label>
            </h2>   
        </PropertyTypeLabelWrapper>
        
    </PropertyProfileWrapper>
    



)
    
