import { toMoney } from "../../utils"
import { Button } from "../Button"
import { CartCard } from "../CartCard"
import { useSelector } from 'react-redux';
import "./CartInfo.scss"
import { StateStore } from "../../@types/reduce";
import { CartTotal } from "../../@types/cart";
import { CoffeData } from "../../@types/coffes";
import { Link } from "react-router-dom";

export function CartInfo() {
    const [total, cart] : [CartTotal, CoffeData[]] = useSelector((state: StateStore) => [
        state.CoffePersistentState.totalPayment, state.CoffePersistentState.cart
    ])
    
    return (
        <div className="CartInfo">
            <div className="card-container">
            {cart?.map((item) => {
                return (
                    <CartCard coffe={item} key={item.id}/>
                )
            })}
            </div>
            <div className="info-coust">
                <div className="flex-info">
                    <p>
                        Total de itens
                    </p>
                    <div className="money">
                        <span className="prefix">
                            R$
                        </span>
                        <span className="value">
                            {toMoney(total.totalItems)}
                        </span>
                    </div>
                </div>
                <div className="flex-info">
                    <p>
                        Entrega
                    </p>
                    <div className="money">
                        <span className="prefix">
                            R$
                        </span>
                        <span className="value">
                            {toMoney(total.delivery)}
                        </span>
                    </div>
                </div>
                <div className="flex-info">
                    <p className="total">
                        Total
                    </p>
                    <div className="money total-money">
                        <span className="prefix">
                            R$
                        </span>
                        <span className="value">
                            {toMoney(total.totalValue)}
                        </span>
                    </div>
                </div>
            </div>
            <Link to="/success">
                <Button className="confirm-payment">
                    Confirmar pedido
                </Button>
            </Link>
        </div>
    )
}