import styled from 'styled-components'

export const PropertyTypeDetailWrapper = styled.div`     
   //border: 1px solid red; 
    display: flex;
    flex-direction: column;
    margin: 10px 0 ;

`
export const PropertyDetail_Options = styled.div`
    //border: 1px solid blue;      
    display: flex;
    justify-content: center;       
    
    a{
        font-size: 1.4em;
         
        span{            
            color: #6262A0;
            font-weight: bold;        
        }
    }
`;

export const PropertyDetail_Global = styled.div`
    //border: 1px solid blue;      
    display: flex;
    justify-content: center;        
`;

export const PropertyDetail_Global_DOS = styled.div`
    //border: 1px solid blue;   
    
    @media (max-width: 1024px){
            //margin-top: 5px;
            padding: 5px;            
            justify-content: center;
            width: 100%;            
    } 
    @media (min-width: 1024px){            
            padding: 0 20px;            
            justify-content: center;
            width: 50%;
    }
    
`;
export const PropertyGalleryWrapper = styled.div`        
   flex: 20;
   //display: flex;
   justify-content: center;
   img{        
        width: 100%;       
        border-radius: 20px;        
    }           
      
`
export const PropertyInfoWrapper = styled.div`     
    flex:80;    
    display: flex;
    flex-direction: column;
    
    
    h1{
        color: #6262A0;
        font-size: 2em;
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
        color: #6262A0;
        font-size: 1.2em;
        font-weight: 400;/*Toma la variacion regular 400 de Roboto*/
        margin: 0;
        text-align: left;

        span{            
            color: #C0C2D2;
            font-weight: bold;           
        }
      
    }

`

