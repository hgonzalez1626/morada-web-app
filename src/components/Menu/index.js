import { IoHome, IoPerson, IoStar, IoAddCircle } from 'react-icons/io5'
import { MenuItem } from './MenuItem';
import { MenuWrapper } from './styles';


const MenuCustomerItems = [
    {
        key: 1,
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        key: 2,
        icon: IoStar,
        label: 'Favoritos',
        path: '/favorites'
    },
    {
        key: 3,
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    }
];

const MenuAdminItems = [
    {
        key: 1,
        icon: IoHome,
        label: 'Inicio',
        path: '/'
    },
    {
        key: 4,
        icon: IoAddCircle,
        label: 'Agregar',
        path: '/addproperty'
    },
    {
        key: 3,
        icon: IoPerson,
        label: 'Perfil',
        path: '/account'
    }
];

export const Menu = () => {
    const typeProfile = 1;
   return ( 
    <div>
        <MenuWrapper>
           {
               typeProfile === 1 && MenuCustomerItems.map(item => <MenuItem{...item}/>)
               
           }
           {
               typeProfile === 2 && MenuAdminItems.map(item => <MenuItem{...item}/>)
               
           }
        </MenuWrapper>
    </div>
)};