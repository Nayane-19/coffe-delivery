import { AddressForm } from "../../Componentes/AdrressForm";
import { CartInfo } from "../../Componentes/CartInfo";
import { PaymentOptions } from "../../Componentes/PaymentOptions";
import "./Cart.scss";

export function Cart(){
    return (
        <div className="Cart">
            <div className="flex-container left-container">
                <h2 className="title">
                    Complete seu pedido
                </h2>
                <AddressForm />
                <PaymentOptions />
            </div>
            <div className="flex-container right-container">
                <h2 className="title">
                    Cafés selecionados
                </h2>
                <CartInfo />
            </div>
        </div>
    )
}