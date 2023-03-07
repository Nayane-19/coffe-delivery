import { toMoney } from "../../utils"
import { Button } from "../Button"
import { CartCard } from "../CartCard"
import "./CartInfo.scss"

export function CartInfo() {
    return (
        <div className="CartInfo">
            <CartCard />
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
                            {toMoney(40)}
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
                            {toMoney(0)}
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
                            {toMoney(40)}
                        </span>
                    </div>
                </div>
            </div>
            <Button className="confirm-payment">
                Confirmar pedido
            </Button>
        </div>
    )
}