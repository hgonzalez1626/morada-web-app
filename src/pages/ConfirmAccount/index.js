import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page"
import { PageTitle } from "../../globalStyles"
import { ConfirmAccountWrapper, ConfirmAccountWrapper_Global, ConfirmAccountWrapper_Global_DOS } from "./styles"
import { requestHttp } from "../../utils/HttpRequest";
import Alert from "../../components/Alert/Alert";
import { showAlert, SW_ICON } from "../../utils/swAlert";
import { Button } from "../../components/Button";

export const ConfirmAccount = () =>{   
        
    const params = useParams();   
    const { id } = params;

    const navigate = useNavigate();
    
    const confirmAcount = async () =>{
        try {                
            const response = await requestHttp(
                {
                    method: 'get',
                    endpoint: `/users/confirm/${id}`                        
                }
            );
            showAlert(
                'Comfirmación Exitosa', 
                "Su cuenta se ha confirmado Correctamente", 
                SW_ICON.SUCCESS,
                () => { navigate('/login')}    
            );                
        } catch (error) {
            showAlert('Error', "Token Incorrecto", SW_ICON.ERROR);
        }
    }                    
    
    return(
        <Page hideMenu>
            <ConfirmAccountWrapper_Global>
                <ConfirmAccountWrapper_Global_DOS>
                    <ConfirmAccountWrapper>                                              
                        <PageTitle>
                            Confirma tu cuenta y comienza disfrutar
                            <br/>
                            <span>"Welcome to Morada"</span>
                        </PageTitle>
                        <br />            
                            <Button type="submit" onPress={confirmAcount} label="Confirmar Cuenta" />
                        <br/>                                                                                        
                    </ConfirmAccountWrapper>
                </ConfirmAccountWrapper_Global_DOS>
            </ConfirmAccountWrapper_Global>
        </Page>
    )   
}