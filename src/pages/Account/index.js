import { Button } from "../../components/Button";
import {Page} from "../../components/Page"
import { FooterFixed, PageTitle } from "../../globalStyles";
import { AccountWrapper_Global, AccountWrapper_Global_DOS } from "./styles";


export const Account = () =>{

    const isAuth = false;

    const UserInfo = () =>(
        <div>
            <h3>Hector</h3>
            <h5>2323232</h5>
            <p>hgonzalez1626@gmail.com</p>
            <hr />
            <FooterFixed>
                <Button 
                    label="Cerrar Sección" 
                    onPress={() =>{alert('Cerrar Sesión')}} 
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
                    isAuth ? <UserInfo />:<UserUnauthorized/>
                }
            </AccountWrapper_Global_DOS>
        </AccountWrapper_Global>                          
    </Page>
    
)};