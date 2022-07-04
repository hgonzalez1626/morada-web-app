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
import { AuthProvider } from './context/AuthProvider'

import ProtectedRoute from './layouts/ProtectedRoute'
import { PropertyProvider } from './context/PropertyProvider'
import { FavoriteProvider } from './context/FavoriteProvider'


export const Navigation = () => (
    <BrowserRouter>
        <AuthProvider>
            <PropertyProvider>
            <FavoriteProvider>
                <Routes>            
                    <Route path='/' element={<Home />} />
                    <Route path='/Property' element={<Property />} />                
                    <Route path='/Account' element={<Account />} />  
                    <Route path='/Login' element={<Login />} />                            
                    <Route path='/Signup' element={<Signup />} />                  
                    <Route path='/ForgetPassword' element={<ForgePassword />} /> 
                    <Route path='/ConfirmAccount/:id' element={<ConfirmAccount/>} /> 
                    <Route path='/ForgetPassword/:token' element={<NewPassword/>} />
                    
                    <Route path='/Favorites' element={<ProtectedRoute />} >
                        <Route index element = {<Favorites />} />                                     
                    </Route>
                    
                    <Route path='/AddProperty' element={<ProtectedRoute />} >
                        <Route index element = {<AddProperty />} />                    
                    </Route>                    

                    <Route path='*' element={<NotFound />} />           
                </Routes>
                </FavoriteProvider>
                </PropertyProvider>
        </AuthProvider>
    </BrowserRouter>
)