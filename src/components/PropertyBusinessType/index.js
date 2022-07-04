
import { IoPricetag } from "react-icons/io5"
import { PropertyBusinessTypeWapper } from "./style"

export const PropertyBusinessType = ({busineesType}) => {
    
    return(
    <PropertyBusinessTypeWapper>
        <IoPricetag />
        <p>{busineesType}</p>
    </PropertyBusinessTypeWapper>
    
    )
}