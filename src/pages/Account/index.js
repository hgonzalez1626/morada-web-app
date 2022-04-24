import { Button } from "../../components/Button";
import {Page} from "../../components/Page"
import { PageTitle } from "../../globalStyles";
import { AccountWrapper } from "./styles";

export const Account = () =>{

    const isAuth = false;

    const UserInfo = () =>(
        <div>
            <h3>Hector</h3>
            <h5>2323232</h5>
            <p>hgonzalez1626@gmail.com</p>
            <hr />            
            <Button label="Cerrar Sección" onPress={() =>{alert('Cerrar Seccion')}} />
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