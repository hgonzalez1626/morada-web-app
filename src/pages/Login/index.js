
import {Page} from "../../components/Page"
import { FormControl, PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"
import { LoginWrapper } from "./styles";


export const Login = () =>(
    <Page hideMenu>
        <PageTitle>Iniciar Sección</PageTitle>
        <br />
        <form>
            <FormControl>
                <label>Correo Electrónico</label>
                <input type="email" />
            </FormControl>
            <FormControl>
                <label>Password</label>
                <input type="password" />                          
            </FormControl>
            <br />
            <Button label="Ingresar" onPress={()=>alert("Iniciar Sección")} />
            <LoginWrapper>
                <a href="/NotFound" >¿Olvido Su Password?</a>            
            </LoginWrapper>
            <br />
            <Button label="Registrarse ahora" linkTo={"/Signup"} />
        </form>
    </Page>
);