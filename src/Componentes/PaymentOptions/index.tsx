import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react"
import { PaymentOptionsData } from "../../@types/coffes"
import { Button } from "../Button"
import "./PaymentOptions.scss"
import { useDispatch, useSelector } from 'react-redux';
import { setPayment } from "../../store/action";
import { StateStore } from "../../@types/reduce";

const paymentOptions: PaymentOptionsData[] = [
    {
        description: "Cartão de Crédito",
        value: "credCard",
        icon: <CreditCard size={16} />,
    },
    {
        description: "Cartão de Débito",
        value: "debitCard",
        icon: <Bank size={16} />
    },
    {
        description: "Dinheiro",
        value: "money",
        icon: <Money size={16} />,
    }
]

export function PaymentOptions() {
    const dispatch = useDispatch();
    const payment = useSelector((state: StateStore) => state.CoffePersistentState.paymentMethod)

    function handlePaymentMethod(payment: string) {
        dispatch(setPayment(payment))
    }

    return (
        <div className="PaymentOptions">
            <div className="header">
                <CurrencyDollar size={20} />
                <div className="title">
                    <h6>
                        Pagamento
                    </h6>
                    <span>
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar.
                    </span>
                </div>
            </div>
            <div className="options">
                {paymentOptions.map((option) => {
                    return (
                        <Button
                            className={`option-payment ${option.description === payment ? "selected" : ""}`}
                            onClick={() => handlePaymentMethod(option.description)}
                            key={option.description}
                        >
                            {option.icon} 
                            {option.description}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}