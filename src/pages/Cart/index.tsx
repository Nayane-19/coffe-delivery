import { AddressForm } from "../../Componentes/AdrressForm";
import { PaymentOptions } from "../../Componentes/PaymentOptions";
import "./Cart.scss";

export function Cart(){
    return (
        <div className="Cart">
            <div className="left-container">
                <AddressForm />
                <PaymentOptions />
            </div>
        </div>
    )
}