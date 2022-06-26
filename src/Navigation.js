

import{
    BrowserRouter,
    Routes,
    Route
    
} from 'react-router-dom'

import { Account } from './pages/Account'
import { AddProperty } from './pages/AddProperty'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Property } from './pages/Property'
import { Signup } from './pages/Signup'
import { ForgePassword } from './pages/ForgetPassword'
import { ConfirmAccount} from './pages/ConfirmAccount'
import { NewPassword } from './pages/NewPassword'

export const Navigation = () => (
    <BrowserRouter>
        <Routes>            
            <Route path='/' element={<Home />} />
            <Route path='/Property' element={<Property />} />  
            <Route path='/AddProperty' element={<AddProperty />} />
            <Route path='/Favorites' element={<Favorites />} />  
            <Route path='/Login' element={<Login />} />
            <Route path='/Account' element={<Account />} />            
            <Route path='/Signup' element={<Signup />} />                  
            <Route path='/ForgetPassword' element={<ForgePassword />} /> 
            <Route path='/ConfirmAccount/:id' element={<ConfirmAccount/>} /> 
            <Route path='/ForgetPassword/:token' element={<NewPassword/>} />             
            <Route path='*' element={<NotFound />} />           
        </Routes>
    </BrowserRouter>
)