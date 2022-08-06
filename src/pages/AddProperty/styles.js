import styled from "styled-components";

export const AddPropertyWrapper_Global = styled.div`
    //border: 1px solid blue;   
    
    display: flex;
    justify-content: center;
    
`;

export const AddPropertyWrapper_Global_DOS = styled.div`
    //border: 1px solid blue;   
    
    @media (max-width: 1024px){
            margin-top: 5px;
            padding: 5px;            
            justify-content: center;
            width: 100%;            
    } 
    @media (min-width: 1024px){
            margin-top: 20px;
            padding: 0 20px;            
            justify-content: center;
            width: 50%;
    }
    
`;

export const AddPropertyWrapper = styled.div`
    //border: 1px solid red;
    display: flex;    
    justify-content: right;
    padding: 10px;
    margin: 10px;    

    a{                            
       margin-bottom: 10px;       
    }   
`;
