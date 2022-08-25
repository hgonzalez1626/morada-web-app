import { FavoritePreviewGalleryWrapper, FavoritePreviewInfoWrapper, FavoritePreviewWrapper, FavoritePreviewWrapper_Global_DOS } from "./styles"
import { Page } from "../../../../components/Page"
import { getCityZoneLabel } from "../../../../utils/GetDataConstants"
import { PropertyBusinessType } from "../../../../components/PropertyBusinessType"
import { PropertyTypeLabel } from "../../../../components/PropertyTypeLabel"
import { getCurrencyFormat } from "../../../../utils/CurrencyFormat"
import { getStaticImage } from "../../../../utils/StacticImage"


export const FavoritePreview = ({ property }) => {

    const {
        title,
        city,
        zone,
        propertyType,
        bussinessType,
        mainImage,
        value,
        description,
        shortDescription,
        _id } = property.property
    //console.log(property.property._id)
    return (

        <Page>
            <FavoritePreviewWrapper>
                <FavoritePreviewWrapper_Global_DOS>
                    <FavoritePreviewGalleryWrapper>
                        <img alt='foto propiedad'
                            //src={`Imagenes/${props.mainImage}`}
                            src={getStaticImage(mainImage)}
                        />
                        
                    </FavoritePreviewGalleryWrapper>
                    <FavoritePreviewInfoWrapper>
                        <h1>{title}</h1>
                        <h2>{shortDescription}</h2>
                        <h3><span>{getCityZoneLabel(city, zone)}</span></h3>
                        <h3><span>
                            <PropertyTypeLabel
                                typeId={propertyType}
                            />
                        </span></h3>
                        <PropertyBusinessType
                            busineesType={bussinessType}
                        />
                        <h3><span>{getCurrencyFormat(value)}</span></h3>
                        <p>{description}</p>
                    </FavoritePreviewInfoWrapper>

                </FavoritePreviewWrapper_Global_DOS>
            </FavoritePreviewWrapper>
        </Page>

    )
}

