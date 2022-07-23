import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext"

import { Page } from "../../components/Page";
import { PropertyProfile } from "./components/PropertyProfile";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer, 
         PropertyTypesContainerHead, 
         PropertyTypesContainerWelcome } from "./styles";
import {IoBusiness, IoHome, IoMap, IoPrism, IoLocation} from "react-icons/io5";
import {PropertyCard} from "./components/PropertyCard" 
import { PropertyWelcome } from "./components/PropertyWelcome";
import { HTTP_VERBS, requestHttp } from "../../utils/HttpRequest";

const ALL_PROPERTIES_TYPE = 0;

const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label:'Apartamentos'},
    { id: 2, icon: IoHome, label:'Casas'},
    { id: 3, icon: IoMap, label:'Lotes'},
    { id: 4, icon: IoPrism, label:'Fincas'},
    { id: 5, icon: IoLocation, label:'Locales'}
];


export const Home = () => {
    const [propertyTypeSeleted, setPropertyTypeSelected] = useState(ALL_PROPERTIES_TYPE);
    const { user } = useContext(UserContext)
    const [properties, setProperties] = useState([]);
  
    const propertyTypeHandler = (id)=>{       
        setPropertyTypeSelected(propertyTypeSeleted === id 
            ? ALL_PROPERTIES_TYPE : id);        
    }

    useEffect(() => {               
        getPropertiesAll();           
    },[propertyTypeSeleted])

    //07/16 llamado a obtener todas las propiedades
    const getPropertiesAll = async ()=>{
        try {            
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,
                    endpoint: '/properties',                         
                    params: makePropertiesFilters()                                     
                }
            );             
            const {data} = response;                
            setProperties(data);       
                        
        } catch (error) {
            console.log(error)
        }
    }

    const makePropertiesFilters = ()=>{
        const filters = {};   
        if(propertyTypeSeleted !== ALL_PROPERTIES_TYPE){
            filters['propertyType'] = propertyTypeSeleted;
        }
        console.log(filters);
        return filters;       
    }
    


    return(
    <Page>               
        <PropertyTypesContainerHead>
            <PropertyProfile
                lblhrc={"Imagenes/Fotohdgf.jpg"}
                lblNameClient = {user ? user.name : 'Usuario no registrado'}                           
            />                    
        </PropertyTypesContainerHead>
                
        <PropertyTypesContainerWelcome>
            <PropertyWelcome />            
        </PropertyTypesContainerWelcome>
                         
        <PropertyTypesContainer>             
            {          
                PropertiesTypes.map((item, key) => 
                    <PropertyTypeButton
                        key={key} 
                        selected={propertyTypeSeleted === item.id}
                        icon={item.icon} 
                        label={item.label}
                        id={item.id}
                        onPress={propertyTypeHandler}
                    /> )
            }
        </PropertyTypesContainer>               
        {properties.map((item, key) => 
            <PropertyCard 
                key={key}                   
                {...item}                
            />
            )
        }                     
    </Page>
    
)};