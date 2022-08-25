
import styled from 'styled-components'

export const PropertyProfileWrapper = styled.div`
    
    //border: 1px solid blue;    
    display: flex;    
`

export const PropertyTypeImageWrapper = styled.div`
        
    //border: 1px solid blue;
    margin: 0;
    display: contents;
    
    img{            
            border-radius: 30px;
            width: 20%;                  
        }    

`

export const PropertyTypeLabelWrapper = styled.div`     
    
    flex: 1;
    //border: 1px solid green;  
    margin : 10px 5px 0;
        
    h2{
        
        color: #6262A0;        
        font-size: 1.8em;
        font-weight: 400;/*Toma la variacion regular 400 de Roboto*/
        margin: 0;
        text-align: left;        
    }
    
    h3{
       
        margin: 0;             
        color: #6262A0;
        font-size: 1.2em;
        font-weight: 400;/*Toma la variacion regular 400 de Roboto*/     
        text-align: left;       
        
    }
    

`
export const PropertyTypesContainerHead = styled.section`
    
    //border: 1px solid red;
    display: flex;  
    margin: 10px 0 ;    
    
`
export const PropertyTypesContainerWelcome = styled.section`

    //border: 1px solid yellow;
    display: flex;    
    flex-direction: column ;  
    padding: 0 0 30px;

`
export const PropertyTypesContainer = styled.section`
    //border: 1px solid orange;
    display: flex;
    overflow-x: scroll; 
    
`