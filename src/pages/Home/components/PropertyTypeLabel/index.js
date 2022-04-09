
import { PropertyTypeLabelWrapper } from "./styles";

export const PropertyTypeLabel = (props) =>(
    <PropertyTypeLabelWrapper>       
        <h4>
            <label>{props.text || "Mi Nombre h4"}</label>
        </h4>
        
    </PropertyTypeLabelWrapper>
    
)

export const PropertyTypeLabelTitle = (props) =>(
    <PropertyTypeLabelWrapper>        
        <h1>
            <label>{props.text || "Titulo h1"}</label>
        </h1>        
    </PropertyTypeLabelWrapper>
    
)

export const PropertyTypeLabelH2 = (props) =>(
    <PropertyTypeLabelWrapper>        
        <h2>
            <label>{props.text || "Titulo h2"}</label>
        </h2>        
    </PropertyTypeLabelWrapper>
    
)

export const PropertyTypeLabelH3 = (props) =>(
    <PropertyTypeLabelWrapper>        
        <h3>
            <label>{props.text || "Titulo h3"}</label>
        </h3>        
    </PropertyTypeLabelWrapper>
    
)
