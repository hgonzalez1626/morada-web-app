
import styled from "styled-components";

export const AccountWrapper = styled.div`
    //border: 1px solid red;
    display: flex;    
    justify-content: center;
    
    a{                            
        margin-bottom: 10px;        
    }
`;

export const AccountWrapper_Global = styled.div`
    //border: 1px solid blue;      
    display: flex;
    justify-content: center;
    
`;

export const AccountWrapper_Global_DOS = styled.div`
    //border: 1px solid blue;   
    
    @media (max-width: 1024px){
            margin-top: 5px;
            padding: 5px;            
            justify-content: center;
            width: 100%;            
    } 
    @media (min-width: 1024px){
            margin-top: 80px;
            padding: 0 20px;            
            justify-content: center;
            width: 50%;
    }    
`;
