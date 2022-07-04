import { IoHome, IoPerson, IoStar, IoAddCircle } from 'react-icons/io5'
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';
import { useAuth } from "../../hooks/useAuth";

const MenuCustomerItems = [
    {
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        icon: IoStar,
        label: 'Favoritos',
        path: '/favorites'
    },
    {
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    }
];

const MenuAdminItems = [
    {
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        icon: IoAddCircle,
        label: 'Agregar',
        path: '/addproperty'
    },
    {
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    }
];

export const Menu = () => {
    const { auth } = useAuth();   
    const typeProfile = (auth.data?auth.data.role:3);
    console.log(typeProfile)
   return ( 
    <div>
        <MenuWrapper>
           {
               typeProfile === 3 && MenuCustomerItems.map(item => <MenuItem{...item}/>)
               
           }
           {
               typeProfile === 2 && MenuAdminItems.map(item => <MenuItem{...item}/>)               
           }
        </MenuWrapper>
    </div>
)};