import { Page } from "../../components/Page";
import { PropertyDeatail } from "./components/PropertyDetail";
import { PropertyGallery } from "./components/PropertyGallery";
import { PropertyTypeContainerDetail, PropertyTypeContainerGallery } from "./styles";

export const Property = () => (
    <Page>
       
            <PropertyTypeContainerGallery>
                <PropertyGallery />       
            </PropertyTypeContainerGallery>
            
            <PropertyTypeContainerDetail>
                <PropertyDeatail />
            </PropertyTypeContainerDetail>
        
    </Page>
    
)