import { useState, useEffect, createContext } from "react";
import { requestHttp } from "../utils/HttpRequest";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{

   const [ auth, setAuth ] = useState({})
   const [ loading, setLoading ] = useState(true)

   useEffect(()=>{
        const autenticateUser = async() => {
            const token = localStorage.getItem('token')
            if(!token){
                setLoading(false)
                return               
            }
            try {
                const response = await requestHttp(
                    {
                        method: 'get',
                        endpoint: '/users/info',
                        token: token
                    }
                );   
                setAuth(response)                
            } catch (error) {
                setAuth({})
            } 
            setLoading(false)                        
        }        
        autenticateUser();
   }, [])

    return(
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;