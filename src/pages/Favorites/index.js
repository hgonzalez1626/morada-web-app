import { useState } from 'react'
import useFavorite from "../../hooks/useFavorite"
import {Page} from "../../components/Page"


export const Favorites = () =>{
    
    const { favorites } = useFavorite();
    console.log(favorites);

    return(
        <Page>
            <p>Favorites...</p>
        </Page>
    )
};