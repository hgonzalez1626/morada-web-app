
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        padding: 0;
        font-family: "Lato";
    }
`;

export const PageTitle = styled.h1`
    font-size: 2.8em;
    color: #222;
    font-weight: 300;
    
`

export const SubTitle = styled.p`

    color: #C0C2D2;
    font-size: 1.0em;
    text-transform: capitalize;
    margin: 0;
    margin-top: 3px;

`;

export const FormControl = styled.div`
    width: auto;
    margin: 5px 0;
    border-radius: 6px;
    background-color: #F2F2F2;
    padding: 5px 10px;
    //border: 1px solid red;
    
    label{
        display: block;
        font-size: 0.9em;
        color: #222;
        font-weight: 500;               
    }
    input[type="email"], input[type="password"],
    input[type="text"], input[type="number"]{
        display: block;
        width: 100%;
        border-radius: 10px;
        font-size: 1.1em;
        padding: 5px 10px;
        margin: 0px;
        background-color: transparent;
        border: none;
        outline: none;        

    }
`;
