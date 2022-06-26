
import styled, {createGlobalStyle} from "styled-components";
import { MENU_HEIGHT } from "./constants/styles";

export const GlobalStyle = createGlobalStyle`
        *, ::after, ::before {
        box-sizing: border-box;   
        //border: 1px solid red;           
    }     
    
    body{        
        //margin: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;                   
        font-family: "Lato";        
        //border: 1px solid red;
        
        
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.8em;
    color: #222;
    font-weight: 300;
    text-align: center;
    font-weight: bold;
    
`

export const SubTitle = styled.p`

    color: #C0C2D2;
    font-size: 1.0em;
    text-transform: capitalize;
    margin: 0;
    margin-top: 3px;

`;

export const FormControl = styled.div`
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #F2F2F2;
    padding: 5px 10px;
    //border: 1px solid blue;
    display: flex;        
    
    
`;

export const FormControlInput = styled.div`
    //border: 1px solid blue;
    flex: 1;    

    label{
        display: block;
        font-size: 0.95em;
        color: #222;
        font-weight: 500;   
                    
    }
    input[type="email"], input[type="password"],
    input[type="text"], input[type="number"]{
        //display: block;
        width: 100%;
        //border-radius: 10px;
        font-size: 1.1em;
        padding: 5px 10px;
        margin: 0px;
        background-color: transparent;
        border: none;
        outline: none;    

    }

    select{
        //display: block;
        width: 100%;
        //border-radius: 10px;
        font-size: 1.1em;
        padding: 5px 10px;
        margin: 0px;
        background-color: transparent;
        border: none;
        outline: none;        

    }

    span{
        color: red;
        font-size: 0.85em;
    }
`

export const FormControlInputRadio = styled.div`
    display: flex;
    margin: 10px;
    label{
        display: block;
        font-size: 0.95em;
        color: #222;
        font-weight: 500;               
    }
    input[type="radio"]{
        margin-left: 8px;
        margin-right: 24px;
    }    
`
export const FormControlInputFile = styled.div`
    display: flex;
    margin: 10px;
    label{
        display: block;
        font-size: 0.95em;
        color: #222;
        font-weight: 500;               
    }
    input[type="file"]{
        margin-left: 8px;
    }    
`

export const FormControlAction = styled.div`
    //border: 1px solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const FooterFixed = styled.footer`
    position: fixed;
    bottom: ${MENU_HEIGHT + 5}px;
    left: 0;
    width: 100%;
`

