import { BrowserRouter } from "react-router-dom";
import { PropertyContextStore } from "./context/PropertyContex";
import { UserContextStore } from "./context/UserContext";
import { GlobalStyle } from "./globalStyles";
import { Navigation } from "./Navigation";

//09/07-9° Paso habilito mi context de usuario en toda la aplicacion
export const App = () => (
    <BrowserRouter>
        <UserContextStore>
           
                <GlobalStyle/>
                <Navigation/>
           
        </UserContextStore>
    </BrowserRouter>    
);