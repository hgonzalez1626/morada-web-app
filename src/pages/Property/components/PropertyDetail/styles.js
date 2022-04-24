import styled from 'styled-components'

export const PropertyTypeDetailWrapper = styled.div`     
   //border: 1px solid red; 
    display: flex;
    flex-direction: column;
    margin: 10px 0 ;

`
export const PropertyGalleryWrapper = styled.div`        
   flex: 30;
   display: flex;
   justify-content: center;
   img{ 
       
        width: 100%;   
        border-radius: 20px;        
    }           
      
`
export const PropertyInfoWrapper = styled.div`     
    flex:70;    
    display: flex;
    flex-direction: column;
    
    
    h1{
        color: #6262A0;
        font-size: 2.8em;
        font-weight: 400;
        margin: 0;
    }

    h2{
        color: #C0C2D2;
        font-size: 2.2em;
        font-weight: 400;/*Toma la variacion regular 400 de Roboto*/
        margin: 0;
        text-align: left;

        span{            
            color: #6262A0;
            font-weight: bold;           
        }
      
    }

`

