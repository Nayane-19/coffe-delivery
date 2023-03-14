import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CoffeData } from "../../@types/coffes";
import { toMoney } from "../../utils";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import "./Card.scss";
import { addCoffeAtCart, calculateTotalCart } from "../../store/action";
import * as alertify from 'alertifyjs';

interface CardProps {
  coffe: CoffeData;
}

export function Card({ coffe }: CardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useDispatch();

  function handleAddCoffeToCart(coffe: CoffeData) {
    dispatch(
      addCoffeAtCart({
        ...coffe,
        quantity: quantity,
      })
    );
    dispatch(calculateTotalCart());
    alertify.notify("Café adicionado no carrinho", "success", 3, null);
  }

  useEffect(() => {
    if (quantity < 1) {
      setQuantity(1);
    }
    if (quantity > 99) {
      setQuantity(99);
    }
  }, [quantity]);

  return (
    <div className="Card">
      <LazyLoadImage src={coffe.image} effect="blur" className="image-coffe" />
      <div className="tags">
        {coffe.tags?.map((tag) => {
          return <span>{tag}</span>;
        })}
      </div>
      <h3>{coffe.name}</h3>
      <span className="description">{coffe.description}</span>
      <div className="coffe-pay">
        <div className="money">
          <span className="prefix">R$</span>
          <span className="value">{toMoney(coffe.value)}</span>
        </div>
        <div className="btn-right">
          <div className="quantity">
            <Minus
              size={14}
              onClick={() => setQuantity((prevState) => prevState - 1)}
            />
            {quantity}
            <Plus
              size={14}
              onClick={() => setQuantity((prevState) => prevState + 1)}
            />
          </div>
            <Button className="btn-cart" onClick={() => handleAddCoffeToCart(coffe)}>
              <ShoppingCart size={18} weight="fill" />
            </Button>
        </div>
      </div>
    </div>
  );
}
