import { Outlet } from 'react-router-dom'
import { Header } from '../../Componentes/Header';
import { useSelector } from 'react-redux';
import "./style.scss"
import { StateStore } from '../../@types/reduce';

export function DefaultLayout() {
    const modal = useSelector((state: StateStore) => state.CoffePersistentState.modal)
    return (
        <>
            <div className={`background-modal ${modal ? "isOpen" : ""}`}/>
            <div className='LayoutContainer'>
                <Header />
                <Outlet />
            </div>
        </>
    )
}