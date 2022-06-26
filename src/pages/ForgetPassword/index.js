import { useState } from "react";
import {Page} from "../../components/Page"
import { FormControl, FormControlInput, PageTitle } from "../../globalStyles";
import { Button } from "../../components/Button"
import { requestHttp } from "../../utils/HttpRequest";
import { ForgetPassWrapper, ForgetPassWrapper_Global, ForgetPassWrapper_Global_DOS } from "./styles";
import Alert from "../../components/Alert/Alert";

export const ForgePassword = () =>{
    
    const [ email, setEmail ] = useState('')
    const [ alert, setAlert ] = useState({})
    
    const handleSubmit = async e =>{        
        e.preventDefault(); 
        if( email === '' || email.length < 6 ){
            setAlert({
                msg: 'Email is required',
                error: true
            });
            return                
        }        
        try {  
            const data = {               
                email
            };          
            const response = await requestHttp(
                {
                    endpoint: '/users/login/forgetPassword',
                    body: data
                }
            );
            setAlert({
                msg: response.data,
                error: false
            })
            setEmail('')            
        } catch (error) {
            console.log(error);
            setAlert({
                msg: error.response.data,
                error: true
            })
        }
       
    }
    const { msg } = alert;
    return(
    <Page hideMenu>
        <ForgetPassWrapper_Global>
        <ForgetPassWrapper_Global_DOS>
        <PageTitle>RECUPERAR PASSWORD</PageTitle>
        <br />
        { msg && <Alert alert={alert} />}
        <br />
        <form>
            <FormControl>
                <FormControlInput>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                    />
                </FormControlInput>                
            </FormControl>            
            <br />            
            <Button label="Enviar E-Mail De Recuperación" onPress={handleSubmit} />
            <br/>            
            <ForgetPassWrapper>                
                    <a href="/Signup" >¿No tienes una cuenta? Regístrate</a>
                    <a href="/Login" >¿Ya tienes una cuenta? Inicia Seccion</a>                                          
            </ForgetPassWrapper>                       
        </form>
        </ForgetPassWrapper_Global_DOS>
        </ForgetPassWrapper_Global>
    </Page>
)};