import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { requestHttp } from "../utils/HttpRequest";
import { showAlert, SW_ICON } from "../utils/swAlert";

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {

    const [ favorites, setFavorites ] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        const getFavorites = async ()=>{
            try {
                const token = localStorage.getItem('token')
                if(!token)return
                                    
                const response = await requestHttp(
                    {
                        endpoint: '/favorites',
                        method: 'get',                        
                        token: token
                    }
                );          
                setFavorites(response)       
                            
            } catch (error) {
                console.log(error)
            }
        }
        getFavorites();
    }, [])

  return (
    <FavoriteContext.Provider
        value={{
            favorites
        }}
    >
        {children}
    </FavoriteContext.Provider>
  )
}

export{
    FavoriteProvider
}
export default FavoriteContext
