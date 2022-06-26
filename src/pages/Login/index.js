import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page"
import { FormControl, FormControlAction, FormControlInput, PageTitle } from "../../globalStyles";
import { Button } from "../../components/Button"
import { LoginWrapper, LoginWrapper_Global, LoginWrapper_Global_DOS } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";
import { IoEye, IoEyeOff} from "react-icons/io5";
import { requestHttp } from "../../utils/HttpRequest";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/swAlert";


export const Login = () =>{
    const [visiblePassword, setVisiblePassword] = useState(false)

    const tooglePasswordVisible = () =>{       
        setVisiblePassword(!visiblePassword)
    }

    const navigate = useNavigate();

    const { 
            register, 
            handleSubmit,
            formState:{
                errors,
                isValid
            }  
    } = useForm({ mode: 'onChange'});       

    const onSubmitLogin = (data) =>{        
        loginRequest(data);
    }

    const loginRequest = async (data) =>{             

        try {           
            const response = await requestHttp(
                {
                    endpoint: '/users/login',
                    body: data
                }
            ); 
            localStorage.setItem('token', response.data.token);           
            showAlert(
                'Bienvenido', 
                "Credenciales Correctas", 
                SW_ICON.SUCCESS,
                () => { navigate('/')}    
            );
        } catch (error) {            
            showAlert('Error', "Credenciales Incorrectas", SW_ICON.ERROR);
        }       
       
    }
    return(
    <Page hideMenu>
        <LoginWrapper_Global>
        <LoginWrapper_Global_DOS>
        <PageTitle>MORADA</PageTitle>
        <br />
        <form onSubmit={handleSubmit(onSubmitLogin)}>
            <FormControl>
                <FormControlInput>
                    <label >Correo Electrónico</label>
                    <input  type="email" 
                            {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}                    
                    /> 
                    {errors.email?.type === 'required' && <span>Este Campo es requerido</span>}               
                    {errors.email?.type === 'pattern' && <span>Ingrese un email valido</span>}
                </FormControlInput>                
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label  >Password</label>
                    <input  type={visiblePassword ? "text":"password"}                            
                            {...register("password", { required: true})}
                    />
                    {errors.password?.type === 'required' && <span>Este password es requerido</span>}
                </FormControlInput>
                <FormControlAction>
                    <ButtonIcon icon={visiblePassword ? IoEye : IoEyeOff} onPress={tooglePasswordVisible} />                     
                </FormControlAction>                           
            </FormControl>
            <br />            
            <Button disabled={!isValid} type="submit" onPress={()=>{}} label="Iniciar Sección" />
            <br/>            
            <LoginWrapper>                
                    <a href="/Signup" >¿No tienes una cuenta? Regístrate</a>
                    <a href="/ForgetPassword" >¿Olvido Su Password?</a>                                          
            </LoginWrapper>                       
        </form>
        
        </LoginWrapper_Global_DOS>
        </LoginWrapper_Global>
    </Page>
)};