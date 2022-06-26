
import { Link } from "react-router-dom";
import styled, {css} from "styled-components";

const BaseButtonStyle = css`
    width: 100%;
    font-size: 1em;
    color: #fff;
    background-color: #4A148C;
    text-align: center;
    border: none;
    border-radius: 6px;
    padding: 9px 0;
    opacity: 0.9;
    cursor: pointer;    
    
    &hover{        
        opacity: 1;
    } 
     
    
`

export const ButtonStyled = styled.button`
    ${BaseButtonStyle}
    
    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }


`;

export const LinkStyled = styled(Link)`
    ${BaseButtonStyle}
    text-decoration: none;
    display: block;
    //border: 1px solid red;
    margin-bottom: 5px;    
`;
