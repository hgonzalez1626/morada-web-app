
import { PropertyTypeButtonWrapper } from "./styles";
import { IoAmericanFootballOutline } from "react-icons/io5";

export const PropertyTypeButton = ({ icon, label}) => (
    
    <PropertyTypeButtonWrapper> 
        <IoAmericanFootballOutline/>
        <p>{label}</p>
    </PropertyTypeButtonWrapper>
    
)