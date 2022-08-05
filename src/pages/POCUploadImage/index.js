import { Fragment, useState } from "react"
import { Button } from "../../components/Button";
import { CONTENT_TYPES, requestHttp } from "../../utils/HttpRequest";
import { showAlert, SW_ICON } from "../../utils/swAlert";

export const POCUploadImage = ()=>{

    const [file, setFile] = useState(null);

    const fileSelectedHandler = (event) =>{
        const fileSelected = event.target.files[0];
        setFile(fileSelected);
        //requestUploadFile(file)
        //console.log(file)
    };

    const uploadFileHandler = (event) =>{
        if(file){
            requestUploadFile(file)
        }else{
            showAlert("Error", "Selecciona un archivo", SW_ICON.ERROR);
        }        
    }

    const requestUploadFile = async (file) =>{
        try {
            const formData = new FormData();
            formData.append("propertyImage", file);
            const response = await requestHttp({
                endpoint: '/properties/upload',
                contentType: CONTENT_TYPES.MULTIPART_FORM_DTA,
                body: formData
            })
            showAlert('Archivo cargado', 'El archivo fue subido', SW_ICON.SUCCESS);
            console.log(response)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (  
        <Fragment>
            <p>Upload Image</p> 
            <input 
                type='file'
                accept="image/png, image/jpeg, image/jpg"
                //multiple
                onChange={fileSelectedHandler}
            />
            <br/>
            <Button label={"Grabar Imagen"} onPress={uploadFileHandler}/>
        </Fragment>
    )
}