import { Button } from "../../components/Button";
import {Page} from "../../components/Page"
import { FooterFixed, PageTitle } from "../../globalStyles";


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
        <PageTitle>Mi cuenta</PageTitle>
        {
            isAuth ? <UserInfo />:<UserUnauthorized/>
        }                          
    </Page>
)};