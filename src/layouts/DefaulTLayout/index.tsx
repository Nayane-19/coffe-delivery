import { Outlet } from 'react-router-dom'
import { Header } from '../../Componentes/Header';
import "./style.scss"

export function DefaultLayout() {
    return (
        <div className='LayoutContainer'>
            <Header />
            <Outlet />
        </div>
    )
}