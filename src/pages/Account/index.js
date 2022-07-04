import { Button } from "../../components/Button";
import {Page} from "../../components/Page"
import { FooterFixed, PageTitle } from "../../globalStyles";
import { AccountWrapper_Global, AccountWrapper_Global_DOS } from "./styles";
import { useAuth } from "../../hooks/useAuth";

export const Account = () =>{

    const { auth } = useAuth();   
    //console.log(auth)
    const UserInfo = () =>(
        <div>
            <h3>Nombre: {auth.data?auth.data.name:''}</h3>
            <h5>Role:   {auth.data?auth.data.role:''}</h5>
            <p>Email:   {auth.data?auth.data.email:''}</p>
            <hr />
            <FooterFixed>
                <Button 
                    label="Cerrar Sección" 
                    linkTo={"/login"}
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
                 auth.data ? <UserInfo />:<UserUnauthorized/>
                }
            </AccountWrapper_Global_DOS>
        </AccountWrapper_Global>                          
    </Page>
    
)};