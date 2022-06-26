import axios from 'axios';

export const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete"
};

const headersConfig = (token) =>{    
    return {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
};

export const requestHttp = async ({
    method = HTTP_VERBS.POST,
    endpoint = '/',
    body = {},
    params = {},
    token = ''
}) => {
    try {
        const url = process.env.REACT_APP_BASE_API + endpoint;
        const options = {
            url,
            method,
            data: body,
            params,
            headers: headersConfig(token)
        }; 
        console.log(options);
        return await axios(options);
    } catch (error) {    
        console.log(error);    
        throw error;
    }
};

