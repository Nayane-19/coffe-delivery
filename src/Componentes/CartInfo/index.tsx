import { toMoney } from "../../utils";
import { Button } from "../Button";
import { CartCard } from "../CartCard";
import { useSelector } from "react-redux";
import "./CartInfo.scss";
import { StateStore } from "../../@types/reduce";
import { CartTotal } from "../../@types/cart";
import { AddressDataForm, CoffeData } from "../../@types/coffes";
import { Link, useNavigate } from "react-router-dom";
import * as alertify from "alertifyjs";

export function CartInfo() {
  const [total, cart, address, payment]: [CartTotal, CoffeData[], AddressDataForm, string] =
    useSelector((state: StateStore) => [
      state.CoffePersistentState.totalPayment,
      state.CoffePersistentState.cart,
      state.CoffePersistentState.address,
      state.CoffePersistentState.paymentMethod,
    ]);
  const navigate = useNavigate();

  function confirmPurchase() {
    if (cart?.length > 0 && address?.street && payment) {
      navigate("/success");
    } else {
      alertify.notify(
        "É necessário ter itens no carrinho e endereço preenchido e método de pagamento selecionado",
        "error",
        3,
        null
      );
    }
  }

  return (
    <div className="CartInfo">
      <div className="card-container">
        {cart?.map((item) => {
          return <CartCard coffe={item} key={item.id} />;
        })}
      </div>
      <div className="info-coust">
        <div className="flex-info">
          <p>Total de itens</p>
          <div className="money">
            <span className="prefix">R$</span>
            <span className="value">{toMoney(total.totalItems)}</span>
          </div>
        </div>
        <div className="flex-info">
          <p>Entrega</p>
          <div className="money">
            <span className="prefix">R$</span>
            <span className="value">{toMoney(total.delivery)}</span>
          </div>
        </div>
        <div className="flex-info">
          <p className="total">Total</p>
          <div className="money total-money">
            <span className="prefix">R$</span>
            <span className="value">{toMoney(total.totalValue)}</span>
          </div>
        </div>
      </div>
      <Button className="confirm-payment" onClick={confirmPurchase}>
        Confirmar pedido
      </Button>
    </div>
  );
}
