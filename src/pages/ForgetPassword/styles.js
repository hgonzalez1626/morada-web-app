import styled from "styled-components";

export const ForgetPassWrapper_Global = styled.div`
    //border: 1px solid blue;   
    
    display: flex;
    justify-content: center;
    
`;

export const ForgetPassWrapper_Global_DOS = styled.div`
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


export const ForgetPassWrapper = styled.div`
    //border: 1px solid red;
    display: flex;    
    justify-content: space-between;
    padding: 10px;
    margin: 10px;

    a{                            
       margin-bottom: 10px;
    }
   
`;


