import { useState } from "react";
import {Page} from "../../components/Page"
import { FormControl, FormControlAction, FormControlInput, PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";
import { SignupWrapper, SignupWrapper_Global, SignupWrapper_Global_DOS } from "./styles";
import { requestHttp } from "../../utils/HttpRequest";
import Alert from "../../components/Alert/Alert";


export const Signup = () =>{
    
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [movil, setMovil] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword ] = useState('')
    const [alert, setAlert] = useState({})


    const tooglePasswordVisible = () =>{       
        setVisiblePassword(!visiblePassword)
    }
    
    const handleSubmit = async e =>{
        e.preventDefault(); 
        if([name, email, movil, password].includes('')){
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            }) 
            setTimeout(()=>{
                setAlert({})
            }, 7000)            
            return    
        }
        if(password !== cpassword){
            setAlert({  
                msg: 'Los Password no son iguales',
                error: true
            })
            return
        }
        if(password.length < 6){
            setAlert({
                msg: 'Password debe contener minimo 6 caracteres',
                error: true
            })          
            return
        }
        setAlert({});        
        try {
            const data = {
                name,
                email,
                movil,
                password
            };
            const response = await requestHttp(
                {
                    endpoint: '/users/signup',
                    body: data
                }
            );
            setAlert({
                msg: response.data,
                error: false
            })  
            setName('') 
            setEmail('')
            setMovil('')
            setPassword('')
            setCPassword('')                             
        } catch (error) {
            setAlert({
                msg: error.response.data,
                error: true
            }) 
        }       
    }
    const { msg } = alert;
    return(
    <Page hideMenu>       
        <SignupWrapper_Global>
            <SignupWrapper_Global_DOS>
                <PageTitle>Bienvenido: Inicie su registro</PageTitle>
                <br />                
                { msg && <Alert alert = {alert} />}                
                <form>
                    <FormControl>
                        <FormControlInput>
                            <label>Nombre Completo</label>
                            <input  type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                            />
                        </FormControlInput>                                          
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Correo Electrónico</label>
                            <input type="email" 
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                            />
                        </FormControlInput>                        
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Movíl o Fijo</label>
                            <input type="number"
                                    value={movil}
                                    onChange={e => setMovil(e.target.value)}
                            />
                        </FormControlInput>                                          
                    </FormControl>            
                    <FormControl>
                        <FormControlInput>
                            <label>Password</label>
                            <input type={visiblePassword ? "text":"password"} 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                            />
                        </FormControlInput>  
                        <FormControlAction>
                        <ButtonIcon icon={visiblePassword ? IoEye : IoEyeOff} onPress={tooglePasswordVisible} />                     
                        </FormControlAction>                                        
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Confirmar Password</label>
                            <input type={visiblePassword ? "text":"password"} 
                                    value={cpassword}
                                    onChange={e => setCPassword(e.target.value)}
                            />
                        </FormControlInput>                                       
                    </FormControl>
                    <br />
                    <Button label="Registrarse" onPress={handleSubmit} />   
                    <br />
                    <SignupWrapper>                                        
                        <a href="/Login" >¿Ya tienes una cuenta? Inicia Sección</a>
                        <a href="/ForgetPassword" >¿Olvido Su Password?</a>
                    </SignupWrapper>        
                </form>
            </SignupWrapper_Global_DOS>
        </SignupWrapper_Global>        
    </Page>
);};