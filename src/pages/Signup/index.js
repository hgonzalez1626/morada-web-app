
import {Page} from "../../components/Page"
import { FormControl, PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"



export const Signup = () =>(
    <Page hideMenu>
        <PageTitle>Bienvenido: Inicie su registro</PageTitle>
        <br />
        <form>
            <FormControl>
                <label>Nombre Completo</label>
                <input type="text" />                          
            </FormControl>
            <FormControl>
                <label>Correo Electrónico</label>
                <input type="email" />
            </FormControl>
            <FormControl>
                <label>Movíl o Fijo</label>
                <input type="number" />                          
            </FormControl>            
            <FormControl>
                <label>Password</label>
                <input type="password" />                          
            </FormControl>
            <FormControl>
                <label>Confirmar Password</label>
                <input type="password" />                          
            </FormControl>
            <br />
            <Button label="Registrarse" onPress={()=>alert("Iniciar Sección")} />           
        </form>
    </Page>
);