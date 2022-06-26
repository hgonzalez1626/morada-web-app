import { useState, useEffect } from "react";
import { Page } from "../../components/Page";
import { PropertyProfile } from "./components/PropertyProfile";
//import { Fotohdgf } from "../../Images/Fotohdgf.jpg"
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer, 
         PropertyTypesContainerHead, 
         PropertyTypesContainerWelcome } from "./styles";
import {IoBusiness, IoHome, IoMap, IoPrism, IoLocation} from "react-icons/io5";
import {PropertyCard} from "./components/PropertyCard" 
import { PropertyWelcome } from "./components/PropertyWelcome";

const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label:'Apartamentos'},
    { id: 2, icon: IoHome, label:'Casas'},
    { id: 3, icon: IoMap, label:'Lotes'},
    { id: 4, icon: IoPrism, label:'Fincas'},
    { id: 5, icon: IoLocation, label:'Locales'}
];


export const Home = () => {

    const [propertyTypeSeleted, setPropertyTypeSelected] = useState(1);

    const propertyTypeHandler = (id)=>{
        setPropertyTypeSelected(id);
    }

    useEffect(() => {
        console.log('propertyTypeSeleted ' + propertyTypeSeleted);
    },[propertyTypeSeleted])
    
    return(
    <Page>               
        <PropertyTypesContainerHead>
            <PropertyProfile
                lblhrc={"Fotohdgf.jpg"}
                lblNameClient = {"Hector Gonzalez"}
            />                    
        </PropertyTypesContainerHead>
                
        <PropertyTypesContainerWelcome>
            <PropertyWelcome />            
        </PropertyTypesContainerWelcome>
                         
        <PropertyTypesContainer>             
            {          
                PropertiesTypes.map(item => 
                    <PropertyTypeButton 
                        selected={propertyTypeSeleted === item.id}
                        icon={item.icon} 
                        label={item.label}
                        id={item.id}
                        onPress={propertyTypeHandler}
                    /> )
            }
        </PropertyTypesContainer>

        <PropertyCard />
        <PropertyCard />
        <PropertyCard />        
    </Page>
    
)};