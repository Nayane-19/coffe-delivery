import { CoffeReduce } from "../@types/coffes";
import { produce } from "immer";
import { ActionTypes } from "./actionTypes";
import { deliveryValue } from "../utils";

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
        draft.cart[existItem].quantity = draft.cart[existItem].quantity + action.payload.coffe.quantity;
      });

    case ActionTypes.CAlCULATE_TOTAL:
        return produce(state, (draft) => {
            draft.totalPayment.delivery = deliveryValue,
            draft.totalPayment.totalItems = draft.totalPayment.totalItems + (action.payload.coffe.value * action.payload.coffe.quantity),
            draft.totalPayment.totalValue = (state.totalPayment.totalItems) + (action.payload.coffe.value * action.payload.coffe.quantity) + deliveryValue;
          });

    default:
      return state;
  }
}
