import axios from 'axios';
import { getToken } from './TokenLS';

export const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete"
};

export const CONTENT_TYPES = {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DTA: "multipart/form-data"
}

const headersConfig = (contentType, token) =>{    
    return {
        "Content-Type": contentType,
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
};

export const requestHttp = async ({
    method = HTTP_VERBS.POST,
    endpoint = '/',
    body = {},
    params = {},
    token = null,
    contentType = CONTENT_TYPES.APPLICATION_JSON
}) => {
    try {
        const url = process.env.REACT_APP_BASE_API + endpoint;
        //09/07-3° Paso pregunto si token esta null o tiene algo
        const authToken = token || getToken();  
        //console.log(authToken)       
        const options = {
            url,
            method,
            data: body,
            params,
            headers: headersConfig(contentType,authToken)
        }; 
        //console.log(options);
        return await axios(options);
    } catch (error) {    
        console.log(error);    
        throw error;
    }
};

