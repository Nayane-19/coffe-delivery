import { produce } from "immer";
import { ActionTypes } from "./actionTypes";
import { deliveryValue } from "../utils";
import { CoffeReduce } from "../@types/reduce";

const initialState: CoffeReduce = {
  cart: [],
  totalPayment: {
    delivery: 0,
    totalItems: 0,
    totalValue: 0,
  },
  address: {
    cep: "",
    city: "",
    clomplement: "",
    neighborhood: "",
    number: 0,
    state: "",
    street: "",
  },
  paymentMethod: "",
};

export function coffeReduce(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      const existItem = state.cart.findIndex((item) => {
        return item.id === action.payload.coffe.id;
      });

      if (existItem < 0) {
        return produce(state, (draft) => {
          draft.cart.push(action.payload.coffe);
        });
      }

      return produce(state, (draft) => {
        draft.cart[existItem].quantity =
          draft.cart[existItem].quantity + action.payload.coffe.quantity;
      });

    case ActionTypes.REMOVE_AT_CART:
      const newCart = state.cart.filter(
        (item) => item.id !== action.payload.coffe.id
      );
      return produce(state, (draft) => {
        draft.cart = newCart
      });

    case ActionTypes.SET_ADRESS:
      return produce(state, (draft) => {
        draft.address = {
          ...action.payload.address
        }
      });

    case ActionTypes.SET_PAYMENT:
      return produce(state, (draft) => {
        draft.paymentMethod = action.payload.payment
      });

    case ActionTypes.CHANGE_QUANTITY:      
      const selectCoffe = state.cart.findIndex((coffe) => coffe.id === action.payload.coffe.id)
      return produce(state, (draft) => {
        draft.cart[selectCoffe] = {
          ...draft.cart[selectCoffe],
          quantity: action.payload.coffe.quantity
        }
      });

    case ActionTypes.CAlCULATE_TOTAL:
      const total = state.cart.reduce((soma, current) => {
        return soma + current.value * current.quantity;
      }, 0);
      return produce(state, (draft) => {
        (draft.totalPayment.delivery = deliveryValue),
          (draft.totalPayment.totalItems = total),
          (draft.totalPayment.totalValue = total + deliveryValue);
      });

    default:
      return state;
  }
}
