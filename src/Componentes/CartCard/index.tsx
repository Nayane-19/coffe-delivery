import "./CartCard.scss";
import { Minus, Plus, Trash } from "phosphor-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Coffe from "../../assets/coffes/americano.svg";
import { toMoney } from "../../utils";
import { Button } from "../Button";

export function CartCard() {
  return (
    <div className="CartCard">
      <div className="left-info">
        <LazyLoadImage src={Coffe} effect="blur" />
        <div className="middle-info">
          <p className="title-item">Expresso Tradional</p>
          <div className="middle-bottom">
            <div className="quantity">
              <Minus size={14} />
              4
              <Plus size={14} />
            </div>
            <Button className="remove-btn">
              <Trash size={20} />
              Remover
            </Button>
          </div>
        </div>
      </div>
      <div className="money">
        <span className="prefix">R$</span>
        <span className="value">{toMoney(40)}</span>
      </div>
    </div>
  );
}
