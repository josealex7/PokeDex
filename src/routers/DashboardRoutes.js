import {
    Routes, 
    Route,
    Navigate
} from 'react-router-dom';
import NavBarPrincipal from '../components/NavBarPrincipal';
import Home from '../components/Home';
import Detalle from '../components/Detalle';

export const DashboardRoutes = () => {
    return ( 
        <div>
            <NavBarPrincipal/>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/detalle/:id' element={<Detalle/>} />
                <Route path='*' element={<Navigate to="/home"/>} />
            </Routes>
        </div>
    )
}