import { CoffeData, AddressDataForm } from "../@types/coffes";
import { ActionTypes } from "./actionTypes";

export function addCoffeAtCart(coffe: CoffeData) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      coffe,
    },
  };
}

export function calculateTotalCart() {
    return {
      type: ActionTypes.CAlCULATE_TOTAL,
    };
  }

export function removeCoffeAtCart(coffe: CoffeData) {
  return {
    type: ActionTypes.REMOVE_AT_CART,
    payload: {
      coffe,
    },
  };
}

export function setAddress(address: AddressDataForm) {
  return {
    type: ActionTypes.SET_ADRESS,
    payload: {
      address,
    },
  };
}

export function setPayment(payment: string) {
  return {
    type: ActionTypes.SET_PAYMENT,
    payload: {
      payment,
    },
  };
}

export function changeQuantity(coffe: CoffeData) {
  return {
    type: ActionTypes.CHANGE_QUANTITY,
    payload: {
      coffe,
    },
  };
}

export function setModal() {
  return {type: ActionTypes.SET_MODAL}
}

