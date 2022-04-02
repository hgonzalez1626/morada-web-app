import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";

const PropertiesTypes = [
    {icon: 'icono-apartamento', label:'Apartamentos'},
    {icon: 'icono-casas', label:'Casas'},
    {icon: 'icono-lote', label:'Lotes'},
    {icon: 'icono-finca', label:'Fincas'},
    {icon: 'icono-local', label:'Locales'}
]
export const Home = () => (
    <Fragment>
        <h1>Home - Morada</h1>
        <PropertyTypesContainer>
        {
            PropertiesTypes.map(item => 
                <PropertyTypeButton icon={item.icon} label={item.label}/> )
        }
        </PropertyTypesContainer>
    </Fragment>
    
)