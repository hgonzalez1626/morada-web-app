import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/Page"
import {
    FormControl,
    FormControlAction,
    FooterFixed,
    FormControlInput,
    FormControlInputRadio,
    FormControlInputFile,
    PageTitle
} from "../../globalStyles";
import { Button } from "../../components/Button"
import { ButtonIcon } from "../../components/ButtonIcon";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { upload } from "@testing-library/user-event/dist/upload";
import {
    AddPropertyWrapper,
    AddPropertyWrapper_Global,
    AddPropertyWrapper_Global_DOS
} from "./styles";

import { useForm } from "react-hook-form";
import { showAlert, SW_ICON } from "../../utils/swAlert";
import { UserContext } from "../../context/UserContext";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { getToken } from "../../utils/TokenLS";


export const AddProperty = () => {

    //const { submitProperties } = useProperty();
    //const { auth } = useAuth();
    const { user } = useContext(UserContext)
    const navigate = useNavigate();
    const [bussinessSeleted, setBussinessSeleted] = useState('');

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        }
    } = useForm({ mode: 'onChange' });

    //BussinessType
    const handleChange = event => {
        setBussinessSeleted(event.target.value)
        console.log(bussinessSeleted)
    }

    //FileUpload
    const [file, setFile] = useState(null);

    const fileSelectedHandler = (event) =>{
        const fileSelected = event.target.files[0];
        setFile(fileSelected);        
    };

    const uploadFileHandler = (data) =>{
        if(file){
            requestUploadFile(file, data)           
        }else{
            showAlert("Error", "Selecciona un archivo", SW_ICON.ERROR);
        }        
    }

    const requestUploadFile = async (file, data) =>{
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response = await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPART_FORM_DTA,
                body: formData
            })    
            //console.log(response.data.fileName)                                         
            onSubmitProperty(data, response.data.fileName)       
           
        } catch (error) {
            console.log('error', error)
        }
    }


    //Property
    const onSubmitProperty = async (data, name) =>{   

        const dataProperty = {}               
        dataProperty['title'] =  data.title
        dataProperty['city'] =  data.city        
        dataProperty['zone'] =  data.zone       
        dataProperty['propertyType'] =  data.propertyType        
        dataProperty['bussinessType'] =  bussinessSeleted
        dataProperty['mainImage'] =  name  
        dataProperty['value'] =  data.value
        dataProperty['shortDescription'] =  data.shortDescription
        dataProperty['description'] =  data.description     
        dataProperty['status'] =  1
        console.log(dataProperty)
        propertyRequest(dataProperty); 
    }

    
    const propertyRequest = async (dataProperty) =>{             

        try {           
            const response = await requestHttp(
                {
                    endpoint: '/properties',
                    body: dataProperty,
                    token: getToken()
                }
            );             
            showAlert(
                'Property', 
                "Creada Correctamente", 
                SW_ICON.SUCCESS                
            );
            setFile('');            
        } catch (error) {            
            showAlert('Error', "Property Incorrect", SW_ICON.ERROR);
        }       
       
    }

    return (
        <Page >
            <AddPropertyWrapper_Global>
                <AddPropertyWrapper_Global_DOS>
                    <PageTitle>INMUEBLE</PageTitle>
                    <br />
                    <form onSubmit={handleSubmit(uploadFileHandler)}>
                        <FormControl>
                            <FormControlInput>
                                <label>TITULO</label>
                                <input type="text"
                                    {...register("title", { required: true })}
                                />
                                {errors.title?.type === 'required' && <span>Este Campo es requerido</span>}
                            </FormControlInput>
                        </FormControl>
                        <FormControl>
                            <FormControlInput>
                                <label>CIUDAD</label>
                                <select id="city"
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
                                <label>TIPO DE NEGOCIO:</label>
                                <FormControlInputRadio>
                                    <label>Arriendo</label>
                                    <input {...register("bussiness")} onChange={handleChange} type="radio" value="10" />
                                    <label>Venta</label>
                                    <input {...register("bussiness")} onChange={handleChange} type="radio" value="20" />
                                </FormControlInputRadio>
                            </FormControlInput>
                        </FormControl>
                        <FormControl>
                            <FormControlInput>
                                <label>VALOR</label>
                                <input type="number"
                                    {...register("value", { required: true })}
                                />
                                {errors.value?.type === 'required' && <span>Este Campo es requerido</span>}
                            </FormControlInput>
                        </FormControl>
                        <FormControl>
                            <FormControlInput>
                                <label>DESCRIPCIÓN CORTA</label>
                                <input type="text"
                                    {...register("shortDescription", { required: true })}
                                />
                                {errors.shortDescription?.type === 'required' && <span>Este Campo es requerido</span>}
                            </FormControlInput>
                        </FormControl>
                        <FormControl>
                            <FormControlInput>
                                <label>DESCRIPCIÓN</label>
                                <input type="text"
                                    {...register("description", { required: true })}
                                />
                                {errors.description?.type === 'required' && <span>Este Campo es requerido</span>}
                            </FormControlInput>
                        </FormControl>
                        <FormControl>
                        <FormControlInputFile>                            
                            <label>Adjuntar imagen</label>
                            <input  type='file' 
                                    accept="image/png, image/jpeg, image/jpg"
                                    onChange={fileSelectedHandler}                                    
                            />
                        </FormControlInputFile>                                       
                    </FormControl>
                        <br />
                        <Button disabled={!isValid} label="Registrar Inmueble" type="submit" onPress={() => { }} />
                        <br />

                    </form>

                </AddPropertyWrapper_Global_DOS>
            </AddPropertyWrapper_Global>
        </Page>
    );
};