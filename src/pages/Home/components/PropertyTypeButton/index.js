
import { Iconwrapper, PropertyTypeButtonWrapper } from "./styles";

export const PropertyTypeButton = ({ icon:Icon, id, label, selected, onPress}) => (    
    <PropertyTypeButtonWrapper onClick={()=>onPress(id)} selected={selected}> 
        <Iconwrapper selected={selected}>
            <Icon />
        </Iconwrapper>
        <p>{label}</p>        
    </PropertyTypeButtonWrapper>
    
)

