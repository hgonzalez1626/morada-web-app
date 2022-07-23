
import { Link } from "react-router-dom";
import styled from "styled-components"

export const PropertyCardWrapper = styled(Link)`
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 5px;    
    display: flex;
    box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    margin: 10px 0;

    text-decoration: none;
    

`;

export const PropertyImageWrapper = styled.div`
    flex: 30;
    border-radius: 20px;
    img{
        width: 100%;
        border-radius: inherit;
    }

`;

export const PropertyInfoWrapper = styled.div`
    flex: 70;
    //border: 1px solid red;
    margin-left: 10px;
    h3{
        margin: 0;
        color:#6262A0;
    }    
`;

export const PropertyDescriptionWrapper = styled.div`    
    color: #6262A0;
    font-weight: bold; 
    font-size: 1em;   
    
    p{
        color: #6262A0;
        font-weight: bold; 
        font-size: 1em;   
    }
`;

export const PropertyValueWrapper = styled.p`
    color: #222;
`
