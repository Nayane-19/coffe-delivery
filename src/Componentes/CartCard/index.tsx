import "./CartCard.scss";
import { Minus, Plus, Trash } from "phosphor-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toMoney } from "../../utils";
import { Button } from "../Button";
import { useDispatch } from 'react-redux';
import { CoffeData } from "../../@types/coffes";
import { calculateTotalCart, changeQuantity, removeCoffeAtCart } from "../../store/action";
import * as alertify from 'alertifyjs';

interface CartCardProps {
  coffe: CoffeData;
}

export function CartCard({coffe}: CartCardProps) {
  const dispatch = useDispatch();

  function handleMinusQuantity(coffe: CoffeData) { 
    dispatch(
      changeQuantity({
        ...coffe,
        quantity: (coffe.quantity - 1) || 1,
      })
    );
    dispatch(calculateTotalCart());
  }

  function handleAddQuantity(coffe: CoffeData) {
    dispatch(
      changeQuantity({
        ...coffe,
        quantity: (coffe.quantity + 1) || 99,
      })
    );
    dispatch(calculateTotalCart());
  }  

  function removeCoffe(coffe: CoffeData) {
    dispatch(removeCoffeAtCart(coffe))
    dispatch(calculateTotalCart());
    alertify.notify("Café removido no carrinho", "error", 5, null);
  }

  return (
    <div className="CartCard">
      <div className="left-info">
        <LazyLoadImage src={coffe.image} effect="blur" />
        <div className="middle-info">
          <p className="title-item">Expresso Tradional</p>
          <div className="middle-bottom">
            <div className="quantity">
              <Minus size={14} onClick={() => handleMinusQuantity(coffe)}/>
              {coffe.quantity}
              <Plus size={14} onClick={() => handleAddQuantity(coffe)}/>
            </div>
            <Button className="remove-btn" onClick={() => removeCoffe(coffe)}>
              <Trash size={20} />
              Remover
            </Button>
          </div>
        </div>
      </div>
      <div className="money">
        <span className="prefix">R$</span>
        <span className="value">{toMoney(coffe.value)}</span>
      </div>
    </div>
  );
}
