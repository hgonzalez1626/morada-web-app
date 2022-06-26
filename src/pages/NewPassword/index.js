import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page"
import { FormControl, FormControlAction, FormControlInput, PageTitle } from "../../globalStyles";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { NewPasswordWrapper, NewPasswordWrapper_Global, NewPasswordWrapper_Global_DOS } from "./styles"
import { requestHttp } from "../../utils/HttpRequest";
import Alert from "../../components/Alert/Alert";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { showAlert, SW_ICON } from "../../utils/swAlert";

export const NewPassword = () =>{
    const [ visiblePassword, setVisiblePassword] = useState(false)
    const [ tokenValido, setTokenValido] = useState(false);
    const [ password, setPassword] = useState('')    
    const [ alert, setAlert] = useState({})          

    const params = useParams();   
    const { token } = params;

    const tooglePasswordVisible = () =>{       
        setVisiblePassword(!visiblePassword)
    }
    
    const navigate = useNavigate();

    useEffect(()=>{
        const checkToken = async () =>{
            try {                
                await requestHttp(
                    {
                        method: 'get',
                        endpoint: `/users/login/forgetPassword/${token}`                        
                    }
                );                
                setTokenValido(true);
                setAlert({});
            } catch (error) {
                setAlert({
                    msg: error.response.data,
                    error: true
                });
            }
        }
        checkToken();
    }, [])  
    
    const handleSubmit = async e =>{
        e.preventDefault();

        if (password.length < 6){
            setAlert({
                msg: 'Password debe contener minimo 6 caracteres',
                error: true
            });
            return    
        }

        try {
            const data = {               
                password
            }; 
           const response =  await requestHttp(
                {                    
                    endpoint: `/users/login/forgetPassword/${token}`,
                    body: data                        
                }
            );
            showAlert(
                'Cambio Exitoso', 
                "Password Recuperado Correctamente", 
                SW_ICON.SUCCESS,
                () => { navigate('/login')}    
            );            
        } catch (error) {
            setAlert({
                msg: error.response.data,
                error: true
            });
        }
    }
    
    const { msg } = alert;
    return(
        <Page hideMenu>
            <NewPasswordWrapper_Global>
                <NewPasswordWrapper_Global_DOS>
                    <NewPasswordWrapper>                                              
                        <PageTitle>
                            Restablece tu cuenta y no pierdas el acceso
                            <br/>
                            <span>"Morada"</span>
                        </PageTitle>                        
                        <br />
                        { msg && <Alert alert = {alert} />}
                        {tokenValido && (
                            <form>
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
                                <br />            
                                    <Button label="Guardar Nuevo Password" onPress={handleSubmit} />
                                <br/> 
                            </form>                                                                  
                         )}                         
                    </NewPasswordWrapper>
                </NewPasswordWrapper_Global_DOS>
            </NewPasswordWrapper_Global>
        </Page>
    )   
}