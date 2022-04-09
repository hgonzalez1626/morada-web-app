import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypeImage } from "./components/PropertyTypeImage";
import { PropertyTypeLabel, PropertyTypeLabelH2, PropertyTypeLabelH3, PropertyTypeLabelTitle } from "./components/PropertyTypeLabel";
import { PropertyTypesContainer, PropertyTypesContainerHead, PropertyTypesContainerHead2, PropertyTypesContainerS2 } from "./styles";

const PropertiesTypes = [
    {icon: 'icono-apartamento', label:'Apartamentos'},
    {icon: 'icono-casa', label:'Casas'},
    {icon: 'icono-lote', label:'Lotes'},
    {icon: 'icono-finca', label:'Fincas'},
    {icon: 'icono-local', label:'Locales'}
]


export const Home = () => (
    <Fragment>
               
        <PropertyTypesContainerHead>
            <PropertyTypeImage lblhrc={"https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907__340.jpg"}/> 
            <PropertyTypesContainerHead2>
                <PropertyTypeLabelH3 text="Hi," />
                <PropertyTypeLabel text="Sandra Smith Holteisman"/> 
            </PropertyTypesContainerHead2>            
        </PropertyTypesContainerHead>
        
        <PropertyTypesContainerS2>
            <PropertyTypeLabelTitle text="Find"/>           
            <PropertyTypeLabelH2 text="Best place nearby"/>
        </PropertyTypesContainerS2>

                         
        <PropertyTypesContainer>             
            {          
                PropertiesTypes.map(item => 
                    <PropertyTypeButton icon={item.icon} label={item.label}/> )
            }
        </PropertyTypesContainer>
    </Fragment>
    
)