import { Page } from "../../components/Page";
import { PropertyDeatail } from "./components/PropertyDetail";
import { PropertyTypeContainerDetail, PropertyWrapper } from "./styles";

export const Property = () => (
    <Page>
       <PropertyWrapper>                              
            <PropertyDeatail />            
        </PropertyWrapper>        
    </Page>
    
)