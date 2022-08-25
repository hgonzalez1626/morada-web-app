import { useContext, useEffect } from 'react'

import{    
    Routes,
    Route,
    useLocation
    
} from 'react-router-dom'
import { UserContext } from './context/UserContext'
import { Account } from './pages/Account'
import { AddProperty } from './pages/AddProperty'
import { PropertyDetail } from './pages/Property/components/PropertyDetail'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Property } from './pages/Property'
import { Signup } from './pages/Signup'
import { ForgePassword } from './pages/ForgetPassword'
import { ConfirmAccount} from './pages/ConfirmAccount'
import { NewPassword } from './pages/NewPassword'
import { getToken, removeToken } from './utils/TokenLS'
import { HTTP_VERBS, requestHttp } from './utils/HttpRequest'
import { POCUploadImage } from './pages/POCUploadImage'
import { PropertiesOwner } from './pages/PropertiesOwner'




export const Navigation = () => {
    //09/07-12° Paso
    /*
    const { user, setUser } = useContext(UserContext);
    const location = useLocation();

    useEffect(()=>{
        checkUserAutenticated()
    }, [location])
    
    const checkUserAutenticated = () => {
        const token = getToken();
        //console.log(token)
        if(token && !user.isAuthenticated){
            //autologin-->traer los datos del usuario
            requestGetUserInfo(token);
        }
    }

    const requestGetUserInfo = async (token)=>{
        try {
            const response = await requestHttp(
                {
                    method: HTTP_VERBS.GET,
                    endpoint: "/users/info",
                    token,                  
                }
            );
            const {data} = response;
            console.log(response)
            setUser({
                name: data.name,
                email: data.email,
                role: data.role,
                isAuthenticated: true
            });
        } catch (error) {
            console.log('error', error)
            removeToken();
        }
    }*/
    
    return(
    
        <Routes>            
            <Route path='/' element={<Home />} />
            <Route path='/Property' element={<Property />} />  
            <Route path='/AddProperty' element={<AddProperty />} />
            <Route path='/PropertyDetail/:id' element={<PropertyDetail />} />
            <Route path='/Favorites' element={<Favorites />} />  
            <Route path='/PropertiesOwner' element={<PropertiesOwner />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Account' element={<Account />} />            
            <Route path='/Signup' element={<Signup />} />                  
            <Route path='/ForgetPassword' element={<ForgePassword />} /> 
            <Route path='/ConfirmAccount/:id' element={<ConfirmAccount/>} /> 
            <Route path='/ForgetPassword/:token' element={<NewPassword/>} />  
            <Route path='/pocuploadimage' element={<POCUploadImage/>}/>           
            <Route path='*' element={<NotFound />} />           
        </Routes>
    
);
};