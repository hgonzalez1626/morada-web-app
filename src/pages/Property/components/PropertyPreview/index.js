import { PropertyPreviewGalleryWrapper, PropertyPreviewInfoWrapper, PropertyPreviewWrapper, PropertyPreviewWrapper_Global_DOS } from "./styles"

export const PropertyPreview = ({property}) => {
    const { title, 
            city, 
            zone, 
            propertyType, 
            bussinessType, 
            mainImage, 
            value, 
            description, 
            shortDescription, 
            _id } = property
            
//* Funcionamiento: se requiere organizar que en vez codigo muestra el nombre
  return (   
    <PropertyPreviewWrapper>      
      <PropertyPreviewWrapper_Global_DOS>
          <PropertyPreviewGalleryWrapper>
            <img alt='Apartamento' 
                        src='https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg'
            />  
          </PropertyPreviewGalleryWrapper>
          <PropertyPreviewInfoWrapper>
            <h1>{title}</h1>             
            <h2>{shortDescription}</h2>
            <h3>city: <span>{city}</span></h3>
            <h3>zone: <span>{zone}</span></h3>
            <h3>propertyType: <span>{propertyType}</span></h3>
            <h3>bussinessType: <span>{bussinessType}</span></h3>
            <h3>Valor: <span>${value}</span></h3>
            <p>{description}</p>       
          </PropertyPreviewInfoWrapper>          
      </PropertyPreviewWrapper_Global_DOS> 
    </PropertyPreviewWrapper>       
  )
}


