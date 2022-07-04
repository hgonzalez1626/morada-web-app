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
import { useAuth } from "../../hooks/useAuth";
import useProperty from "../../hooks/useProperty"

const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label:'Apartamentos'},
    { id: 2, icon: IoHome, label:'Casas'},
    { id: 3, icon: IoMap, label:'Lotes'},
    { id: 4, icon: IoPrism, label:'Fincas'},
    { id: 5, icon: IoLocation, label:'Locales'}
];

//* Funcionamiento: Insertar los filtros de min-max, ciudad y zona, BussinesType 

export const Home = () => {
    
    const { auth } = useAuth();  
    const { propertiesAll, submitPropertiesFilters } = useProperty();

    console.log(auth)
    
    const [ estado, setEstado ] = useState(false)  
         
    const [propertyTypeSeleted, setPropertyTypeSelected] = useState(1);

    const propertyTypeHandler = (id)=>{
        setPropertyTypeSelected(id);
    }

    //* Funcionamiento Inserte este metodo por tiempo de carga de properties
    const Cargar = ()=>{
        setTimeout(()=>{            
             //console.log('CANT:', properties)              
             setEstado(true)
             //console.log(estado)
        }, 300)           
    }

    useEffect(() => {
        const data = {
            propertyType:propertyTypeSeleted
        };        
        submitPropertiesFilters(data);   
        //console.log('propertyType:' + propertyTypeSeleted);
    },[propertyTypeSeleted])
    
    return(
    <Page>               
        <PropertyTypesContainerHead>
            <PropertyProfile
                lblhrc={"Fotohdgf.jpg"}
                lblNameClient = {auth.data ? auth.data.name : 'Usuario no registrado'}
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
        
        <>
            {estado ?
              propertiesAll.data.map(property => (
                <PropertyCard
                    key={property._id}
                    property = {property}                            
                />
             )):Cargar()                                     
            }
        </>
              
    </Page>
    
)};