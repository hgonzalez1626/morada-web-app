import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Page } from "../../components/Page"
import { UserContext } from "../../context/UserContext";
import { FooterFixed, PageTitle } from "../../globalStyles";
import { removeToken } from "../../utils/TokenLS";
import { AccountWrapper_Global, AccountWrapper_Global_DOS } from "./styles";


export const Account = () =>{

    //09/07-10° Paso capturar el context de usuario
    const { user, closeSeccion } = useContext(UserContext)
    //console.log(user) 
    

    const handleCloseSeccion = ()=>{
        closeSeccion();
        removeToken();
        //() => { navigate('/')}
    }

    const navigate = useNavigate();   

    const UserInfo = () =>(
        <div>
            <h3>Nombre: {user.name}</h3>
            <h5>Role:   {user.role}</h5>
            <p>Email:   {user.email}</p>
            <hr />
            <FooterFixed>                
                <Button 
                    label="Cerrar Sección"  
                    onPress={handleCloseSeccion}                                                       
                />
            </FooterFixed>                       
        </div>
    )

    const UserUnauthorized = () => (
        <div>
            <h2>Usuario No Autenticado</h2>
            <p>Para acceder a tu perfil de usuario inicia Sección</p>            
            <Button label="Iniciar Sección" linkTo={"/login"} />
        </div>
    )

    return(
    <Page>
        <AccountWrapper_Global>
            <AccountWrapper_Global_DOS>
                <PageTitle>Mi cuenta</PageTitle>
                {
                    user.isAuthenticated ? <UserInfo />:<UserUnauthorized/>
                }
            </AccountWrapper_Global_DOS>
        </AccountWrapper_Global>                          
    </Page>
    
)};