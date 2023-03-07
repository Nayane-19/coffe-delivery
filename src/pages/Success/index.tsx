import "./Success.scss"
import Illustration from "../../assets/illustration.svg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { InfoPurchase } from "../../Componentes/InfoPurchase"
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Success() {
    return (
        <div className="Success">
            <div className="left-container">
                <h1 className="title">
                    Uhu! Pedido confirmado
                </h1>
                <p className="subtitle">Agora é só aguardar que logo o café chegará até você</p>
                <div className="box-container">
                    <InfoPurchase
                        icon={<MapPin size={16} weight="fill" />}
                        title={
                            <span>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                            </span>
                        }
                        subtitle={
                            <span>Farrapos - Porto Alegre, RS</span>
                        }
                        className="purple"
                    />
                      <InfoPurchase
                        icon={<Timer size={16} weight="fill" />}
                        title={
                            <span>
                                Previsão de entrega
                            </span>
                        }
                        subtitle={
                            <strong>20 min - 30 min</strong>
                        }
                        className="yellow"
                    />
                      <InfoPurchase
                        icon={<CurrencyDollar size={16} weight="fill" />}
                        title={
                            <span>
                                Pagamento na entrega
                            </span>
                        }
                        subtitle={
                            <strong>Cartão de Crédito</strong>
                        }
                        className="yellow-dark"
                    />
                </div>
            </div>
            <LazyLoadImage src={Illustration} effect="blur" />
        </div>
    )
}