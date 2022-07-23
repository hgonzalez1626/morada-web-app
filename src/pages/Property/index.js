import { Page } from "../../components/Page";
import { PropertyDetail } from "./components/PropertyDetail";
import { PropertyTypeContainerDetail, PropertyWrapper } from "./styles";

export const Property = () => (
    <Page>
       <PropertyWrapper>                              
            <PropertyDetail />            
        </PropertyWrapper>        
    </Page>
    
)