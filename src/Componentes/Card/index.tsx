import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CoffeData } from "../../@types/coffes"
import { toMoney } from "../../utils";
import { Button } from "../Button";
import "./Card.scss"

interface CardProps {
    coffe: CoffeData;
}

export function Card({coffe}: CardProps){

    return (
        <div className="Card">
            <LazyLoadImage src={coffe.image} effect="blur" className="image-coffe"/>
            <div className="tags">
                {coffe.tags?.map((tag) => {
                    return (
                        <span>{tag}</span>
                    )
                })}
            </div>
            <h3>{coffe.name}</h3>
            <span className="description">{coffe.description}</span>
            <div className="coffe-pay">
                <div className="money">
                    <span className="prefix">
                        R$
                    </span>
                    <span className="value">
                        {toMoney(coffe.value)}
                    </span>
                </div>
                <div className="btn-right">
                    <div className="quantity">
                        <Minus size={14} />
                        {coffe.quantity}
                        <Plus size={14} />
                    </div>
                    <Button className="btn-cart">
                        <ShoppingCart size={18} weight="fill" />
                    </Button>
                </div>
            </div>
        </div>
    )
}