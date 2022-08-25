import styled from 'styled-components'

export const PropertiesOwnerPreviewWrapper = styled.div`     
    //border: 1px solid red;      
    display: flex;
    justify-content: center;         
`

export const PropertiesOwnerPreviewWrapper_Global_DOS = styled.div`
    
    border: 1px solid #ccc;  
    border-radius: 20px;    
    display: flex;
    box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    @media (max-width: 1440px){
            margin-top: 5px;
            padding: 5px;            
            justify-content: center;
            width: 100%;            
    } 
    @media (min-width: 1440px){
            margin-top: 0px;
            padding: 0 0px;            
            justify-content: center;
            width: 70%;
    }
    
`;


export const PropertiesOwnerPreviewGalleryWrapper = styled.div`        
   flex: 30;
   justify-content: center;
   margin: 5px;
   img{ 
       
        width: 100%;   
        border-radius: 20px;        
    }           
      
`
export const PropertiesOwnerPreviewInfoWrapper = styled.div`    
    //border: 1px solid red;
    flex: 70;
    padding-left:10px;

    
    h1{
        color: #6262A0;
        font-size: 1.6em;
        font-weight: 400;
        margin: 0;
    }

    h2{
        color: #C0C2D2;
        font-size: 1.2em;
        font-weight: 400;/*Toma la variacion regular 400 de Roboto*/
        margin: 0;
        text-align: left;

        span{            
            color: #6262A0;
            font-weight: bold;           
        }
      
    }

    h3{
        color: #C0C2D2;
        font-size: 1em;
        font-weight: 400;/*Toma la variacion regular 400 de Roboto*/
        margin: 0;
        text-align: left;

        span{            
            color: #6262A0;
            font-weight: bold;           
        }      
    }
    
    p{
        color: #6262A0;
        font-weight: bold; 
        font-size: 1em;   
    }

`

