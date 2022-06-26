import styled from "styled-components";

export const NewPasswordWrapper_Global = styled.div`
    //border: 1px solid blue;   
    
    display: flex;
    justify-content: center;
    
    
`;

export const NewPasswordWrapper_Global_DOS = styled.div`
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


export const NewPasswordWrapper = styled.div`
    //border: 1px solid red;
         
    padding: 10px;
    margin: 10px;
    
    a{                            
       margin-bottom: 10px;
       
    }

    span{
        color: blueviolet;
        font-weight: 700;
       
    }
   
`;
