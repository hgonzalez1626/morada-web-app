import { useState } from "react";
import {Page} from "../../components/Page"
import { FormControl, FormControlAction, FormControlInput, PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";



export const Signup = () =>{
    
    const [visiblePassword, setVisiblePassword] = useState(false)

    const tooglePasswordVisible = () =>{       
        setVisiblePassword(!visiblePassword)
    }
    
    return(
    <Page hideMenu>
        <PageTitle>Bienvenido: Inicie su registro</PageTitle>
        <br />
        <form>
            <FormControl>
                <FormControlInput>
                    <label>Nombre Completo</label>
                    <input type="text" />
                </FormControlInput>                                          
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Correo Electrónico</label>
                    <input type="email" />
                </FormControlInput>
                
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>Movíl o Fijo</label>
                    <input type="number" />
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
            <FormControl>
                <FormControlInput>
                    <label>Confirmar Password</label>
                    <input type={visiblePassword ? "text":"password"} />
                </FormControlInput>                                       
            </FormControl>
            <br />
            <Button label="Registrarse" onPress={()=>alert("Iniciar Sección")} />           
        </form>
    </Page>
);};