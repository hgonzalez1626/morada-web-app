import { useState } from "react";
import {Page} from "../../components/Page"
import { FormControl, FormControlAction, FormControlInput, PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"
import { LoginWrapper } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";


export const Login = () =>{
    const [visiblePassword, setVisiblePassword] = useState(false)

    const tooglePasswordVisible = () =>{       
        setVisiblePassword(!visiblePassword)
    }
    return(
    <Page hideMenu>
        <PageTitle>Iniciar Sección </PageTitle>
        <br />
        <form>
            <FormControl>
                <FormControlInput>
                    <label>Correo Electrónico</label>
                    <input type="email" />
                </FormControlInput>                
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Password</label>
                    <input type={visiblePassword ? "text":"password"} />
                </FormControlInput>
                <FormControlAction>
                    <ButtonIcon icon={visiblePassword ? IoEye : IoEyeOff} onPress={tooglePasswordVisible} />                     
                </FormControlAction>                           
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
)};