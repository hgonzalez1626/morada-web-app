import { useContext, useEffect, useState } from 'react'
import { Page } from "../../components/Page"
import { FavoriteTitleWrapper, FavoriteTypeContainerDetail, FavoriteWrapper } from './styles';
import { FavoritePreview } from './components/FavoritePreview';
import { UserContext } from '../../context/UserContext';
import { getToken } from '../../utils/TokenLS';
import { HTTP_VERBS, requestHttp } from '../../utils/HttpRequest';


export const Favorites = () => {

    const { user } = useContext(UserContext)
    const [favorites, setFavorites] = useState([])
    const [estado, setEstado] = useState(false)

    console.log(favorites);

    useEffect(() => {
        const getFavorites = async () => {
            try {
                const token = getToken()
                if (!token) return
                const response = await requestHttp(
                    {
                        method: HTTP_VERBS.GET,
                        endpoint: '/favorites',
                        token: token
                    }
                );
                const { data } = response;
                setFavorites(data)
            } catch (error) {
                console.log(error)
            }
        }
        getFavorites();
    }, [])

    //* Funcionamiento Inserte este metodo por tiempo de carga de properties
    const Cargar = () => {
        setTimeout(() => {
            //console.log('CANT:', properties)              
            setEstado(true)
            //console.log(estado)
        }, 300)
    }

    return (
        <Page>
            <FavoriteWrapper>
                <FavoriteTitleWrapper>
                    <h1>Propiedades Favoritas De: "<span>{user.isAuthenticated ? user.name : ''}"</span> </h1>
                </FavoriteTitleWrapper>
                <FavoriteTypeContainerDetail>
                    {estado ?
                        favorites.map(property => (
                            <FavoritePreview
                                key={property._id}
                                property={property}
                            />
                        ))
                        : Cargar()
                    }
                </FavoriteTypeContainerDetail>
            </FavoriteWrapper>
        </Page>
    )
};