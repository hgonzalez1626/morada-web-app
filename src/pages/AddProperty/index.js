import { useState } from "react";
import {Page} from "../../components/Page"
import { FormControl, 
         FormControlAction, 
         FormControlInput, 
         FormControlInputRadio, 
         FormControlInputFile, 
         PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";
import { upload } from "@testing-library/user-event/dist/upload";

export const AddProperty = () =>{
    
    
    return(
    <Page hideMenu>
        <PageTitle>INMUEBLE</PageTitle>
        <br />
        <form>            
            <FormControl>
                <FormControlInput>
                    <label>PAIS</label>
                    <input type="text" value="Colombia" />
                </FormControlInput>                                          
            </FormControl>            
            <FormControl>
                <FormControlInput>
                    <label>CIUDAD</label>
                    <input type="text" value="Medellín"/>
                </FormControlInput>                                                        
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>ZONA</label>
                    <input type="text" />
                </FormControlInput>                
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>TIPO DE INMUEBLE</label>                    
                    <select id="tipo">
                        <option value={""}>--Seleccione--</option>
                        <option value={"1"}>Apartamento</option>
                        <option value={"2"}>Casa</option>
                        <option value={"3"}>Lote</option>
                        <option value={"4"}>Finca</option>
                        <option value={"5"}>Local</option>
                    </select>
                </FormControlInput>                                          
            </FormControl>            
            <FormControl>
                <FormControlInputRadio>
                    <label>ARRIENDO</label>
                    <input type="radio" value="1" id="arriendo"/>                                                                          
                
                    <label>VENTA</label>
                    <input type="radio" value="2" id="venta"/>                                                                                
                </FormControlInputRadio>                                       
            </FormControl>
            <FormControl>
                <FormControlInput>
                    <label>VALOR</label>
                    <input type="number" />
                </FormControlInput>                                       
            </FormControl>
            <FormControl>
                <FormControlInputFile>
                    <label>Adjuntar Imagen</label>
                    <input type='file' />
                </FormControlInputFile>                                       
            </FormControl>
            <br />
            <Button label="Registrar Inmueble" onPress={()=>alert("Registrado")} />           
        </form>
    </Page>
);};