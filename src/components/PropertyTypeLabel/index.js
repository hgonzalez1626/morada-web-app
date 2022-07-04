import { PropertyTypeLabelWrapper } from "./style";


export const PropertyTypeLabel = ({typeId}) => {
    return(
        <PropertyTypeLabelWrapper>
            <p>{typeId}</p>
        </PropertyTypeLabelWrapper>
    )
}
