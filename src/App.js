import { Fragment } from "react";
import { GlobalStyle } from "./globalStyles";
import { Home } from "./pages/Home";

export const App = () => (
    <Fragment>
        <GlobalStyle/>
        <Home/>
    </Fragment>    
)