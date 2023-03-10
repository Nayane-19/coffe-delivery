import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { StateStore } from "../../@types/reduce";
import { AddressDataForm, CoffeData } from "../../@types/coffes";

export function Header(){
    const [cart, address]: [CoffeData[], AddressDataForm] = useSelector((state: StateStore) => [state.CoffePersistentState.cart, state.CoffePersistentState.address])
    return(
        <header className="Header">
            <NavLink to="/">
                <Logo className="logo"/>
            </NavLink>
            <div className="buttons-right">
                <Button className="button-location" onClick={() => {}}>
                    <MapPin size={19} weight="fill" />
                    {address.city}
                </Button>
                <NavLink to="/cart">
                    <Button className="button-cart" onClick={() => {}}>
                        <ShoppingCart size={19} weight="fill" />
                        <span>{cart?.length}</span>
                    </Button>
                </NavLink>
            </div>
        </header>
    )
}