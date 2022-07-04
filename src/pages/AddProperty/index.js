import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Page} from "../../components/Page"
import { FormControl, 
         FormControlAction,
         FooterFixed, 
         FormControlInput, 
         FormControlInputRadio, 
         FormControlInputFile, 
         PageTitle } from "../../globalStyles";
import {Button} from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon";
import {IoEye, IoEyeOff} from "react-icons/io5";
import { upload } from "@testing-library/user-event/dist/upload";
import { AddPropertyWrapper,
         AddPropertyWrapper_Global, 
         AddPropertyWrapper_Global_DOS } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import useProperty from "../../hooks/useProperty";
import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/swAlert";


export const AddProperty = () =>{
    
    const { submitProperties } = useProperty();
    const { auth } = useAuth();
    const navigate = useNavigate();
    
    const { 
            register, 
            handleSubmit,
            formState:{
                errors,
                isValid
            }  
    } = useForm({ mode: 'onChange'});       

    const onSubmitaddProperty = async (data) =>{
        if(auth.data.role != 2){
            showAlert(  'Error', 
                        "User not authorized to perform this operation", 
                        SW_ICON.ERROR,
                        () => { navigate('/')}
                    );
            
            return
        }                      
       await submitProperties(data);                        
    } 
    
    return(
    <Page hideMenu>
        <AddPropertyWrapper_Global>
            <AddPropertyWrapper_Global_DOS>
                <PageTitle>INMUEBLE</PageTitle>
                <br />
                <form onSubmit={handleSubmit(onSubmitaddProperty)}>                              
                    <FormControl>
                        <FormControlInput>
                            <label>TITULO</label>
                            <input  type="text"                                    
                                     {...register("title", { required: true })}                                                                        
                            />
                            {errors.title?.type === 'required' && <span>Este Campo es requerido</span>}
                        </FormControlInput>                                          
                    </FormControl>            
                    <FormControl>
                        <FormControlInput>
                            <label>CIUDAD</label>                            
                            <select id="property-type"
                                    {...register("city", { required: true })}
                            >
                                <option value={""}>--Seleccione--</option>
                                <option value={"1"}>Medellín</option>
                                <option value={"2"}>San Pedro</option>
                                <option value={"3"}>Rionegro</option>
                                <option value={"4"}>Caldas</option>
                                <option value={"5"}>Llano Grande</option>                                
                            </select>
                            {errors.city?.type === 'required' && <span>Este Campo es requerido</span>}
                        </FormControlInput>                                                        
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>ZONA</label>
                            <select id="zone"
                                    {...register("zone", { required: true })}
                            >
                                <option value={""}>--Seleccione--</option>
                                <option value={"1"}>Belen</option>
                                <option value={"2"}>Envigado</option>
                                <option value={"3"}>Poblado</option>
                                <option value={"4"}>Laureles</option>
                                <option value={"5"}>Otra</option>                                
                            </select>
                            {errors.zone?.type === 'required' && <span>Este Campo es requerido</span>}
                        </FormControlInput>                
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>TIPO DE INMUEBLE</label>                    
                            <select id="propertyType"
                                    {...register("propertyType", { required: true })} 
                            >
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
                        <FormControlInput>
                            <label>TIPO DE NEGOCIO</label>                    
                            <select id="bussinessType"
                                    {...register("bussinessType", { required: true })} 
                            >
                                <option value={""}>--Seleccione--</option>
                                <option value={"10"}>Arriendo</option>
                                <option value={"20"}>Venta</option>                                                               
                            </select>                                                                                
                        </FormControlInput>                                       
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>VALOR</label>
                            <input  type="number"
                                    {...register("value", { required: true })} 
                            />
                            {errors.value?.type === 'required' && <span>Este Campo es requerido</span>}
                        </FormControlInput>                                       
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>DESCRIPCIÓN CORTA</label>
                            <input  type="text"                                    
                                     {...register("shortDescription", { required: true })}                                                                        
                            />
                            {errors.shortDescription?.type === 'required' && <span>Este Campo es requerido</span>}
                        </FormControlInput>                                          
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>DESCRIPCIÓN</label>
                            <input  type="text"                                    
                                     {...register("description", { required: true })}                                                                        
                            />
                            {errors.description?.type === 'required' && <span>Este Campo es requerido</span>}
                        </FormControlInput>                                          
                    </FormControl>
                    <FormControl>
                        <FormControlInputFile>
                            <label>Adjuntar Imagen</label>
                            <input  type='file' 
                                    //{...register("mainImage")}
                            />
                        </FormControlInputFile>                                       
                    </FormControl>
                    <br />
                    <Button disabled={!isValid} label="Registrar Inmueble" type="submit" onPress={()=>{}} />
                    <br />
                    <AddPropertyWrapper>
                        <a href="/" >Ir al inicio...</a>
                    </AddPropertyWrapper>                       
                </form>
                
            </AddPropertyWrapper_Global_DOS>
        </AddPropertyWrapper_Global>        
    </Page>
);};