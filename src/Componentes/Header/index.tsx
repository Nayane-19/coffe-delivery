import "./Header.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Button } from "../Button";

export function Header(){
    return(
        <header className="Header">
            <Logo className="logo"/>
            <div className="buttons-right">
                <Button className="button-location">
                    <MapPin size={19} weight="fill" />
                    Porto Alegre
                </Button>
                <Button className="button-cart">
                <ShoppingCart size={19} weight="fill" />
                </Button>
            </div>
        </header>
    )
}