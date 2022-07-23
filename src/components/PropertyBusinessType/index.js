
import { IoPricetag } from "react-icons/io5"
import { getBusinessTypeLabel } from "../../utils/GetDataConstants"
import { PropertyBusinessTypeWapper } from "./style"

export const PropertyBusinessType = ({busineesType}) => (
    <PropertyBusinessTypeWapper>
        <IoPricetag />
        <p>{getBusinessTypeLabel(busineesType)}</p>
    </PropertyBusinessTypeWapper>
    
)