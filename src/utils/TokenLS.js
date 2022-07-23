const TOKEN = 'token_morada';

//09/07-1° Paso Almacenar Token, recuperar token, eliminar token
export const setToken = (value) =>{    
    localStorage.setItem(TOKEN, value);
}

export const getToken = () =>{
   return localStorage.getItem(TOKEN);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}