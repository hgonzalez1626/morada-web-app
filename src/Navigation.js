

import{
    BrowserRouter,
    Routes,
    Route
    
} from 'react-router-dom'

import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Property } from './pages/Property'

export const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Property' element={<Property />} />  
            <Route path='*' element={<NotFound />} />           
        </Routes>
    </BrowserRouter>
)