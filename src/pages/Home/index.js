
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyProfile } from "./components/PropertyProfile";
import { PropertyTypesContainer, PropertyTypesContainerHead, PropertyTypesContainerWelcome } from "./styles";
import {IoBusiness, IoHome, IoMap, IoPrism, IoLocation} from "react-icons/io5";
import {PropertyCard} from "./components/PropertyCard" 
import { Page } from "../../components/Page";
import { PropertyWelcome } from "./components/PropertyWelcome";

const PropertiesTypes = [
    {icon: IoBusiness, label:'Apartamentos'},
    {icon: IoHome, label:'Casas'},
    {icon: IoMap, label:'Lotes'},
    {icon: IoPrism, label:'Fincas'},
    {icon: IoLocation, label:'Locales'}
]


export const Home = () => (
    <Page>               
        <PropertyTypesContainerHead>
            <PropertyProfile
                lblhrc={"https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg"}
                lblNameClient = {"Sandra Smith Holteisman"}
            />             
        </PropertyTypesContainerHead>
                
        <PropertyTypesContainerWelcome>
            <PropertyWelcome />
        </PropertyTypesContainerWelcome>
                         
        <PropertyTypesContainer>             
            {          
                PropertiesTypes.map(item => 
                    <PropertyTypeButton icon={item.icon} label={item.label}/> )
            }
        </PropertyTypesContainer>

        <PropertyCard />
    </Page>
    
)