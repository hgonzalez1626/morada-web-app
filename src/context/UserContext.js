import { createContext, useEffect, useState } from "react";
import { HTTP_VERBS, requestHttp } from "../utils/HttpRequest";
import { getToken, removeToken } from "../utils/TokenLS";

//09/07-8° Paso creo context e inicializo el estate como un usuario no logeado
const initialState = {
    role: 0,
    name: '',
    email: '',    
    isAuthenticated: false
};

export const UserContext = createContext(initialState);

export const UserContextStore = (props) => {

    const [ user, setUser ] = useState(initialState);    

    useEffect(()=>{
        checkUserAutenticated()
    }, [])
    
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
            //console.log(response)
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
    }

    const closeSeccion = ()=>{
        setUser({});
    }

    return (
        <UserContext.Provider value={{user, setUser, requestGetUserInfo, closeSeccion}}>
            { props.children}
        </UserContext.Provider>
    );
};
