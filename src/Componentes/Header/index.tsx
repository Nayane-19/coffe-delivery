import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "../Button";
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <header className="Header">
            <NavLink to="/">
                <Logo className="logo"/>
            </NavLink>
            <div className="buttons-right">
                <Button className="button-location">
                    <MapPin size={19} weight="fill" />
                    Porto Alegre
                </Button>
                <NavLink to="/cart">
                    <Button className="button-cart">
                        <ShoppingCart size={19} weight="fill" />
                    </Button>
                </NavLink>
            </div>
        </header>
    )
}