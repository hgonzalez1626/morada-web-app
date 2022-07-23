import { getPropertyTypeLabel } from "../../utils/GetDataConstants";
import { PropertyTypeLabelWrapper } from "./style";


export const PropertyTypeLabel = ({typeId}) => (
    
    <PropertyTypeLabelWrapper>
        <p>{getPropertyTypeLabel(typeId)}</p>
    </PropertyTypeLabelWrapper>
)
