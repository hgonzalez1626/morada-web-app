
import { Iconwrapper, PropertyTypeButtonWrapper } from "./styles";

export const PropertyTypeButton = ({ icon:Icon, label}) => (
    
    <PropertyTypeButtonWrapper> 
        <Iconwrapper>
            <Icon />
        </Iconwrapper>
        <p>{label}</p>
        
    </PropertyTypeButtonWrapper>
    
)

