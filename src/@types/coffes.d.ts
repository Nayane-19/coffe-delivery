import { ReactNode } from "react";
import { CartTotal, CoffeCartData } from "./cart";

export interface CoffeData {
    id: number;
    image: string;
    tags: string[];
    name: string;
    description: string;
    value: number;
    quantity: number;
    image: string;
}

export interface AddressDataForm {
    cep: string;
    street: string;
    number: number;
    clomplement: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface PaymentOptionsData {
    description: string;
    value: string;
    icon: ReactNode;
}

export interface CoffeContextData {
    addCoffeToCart: (data: CoffeData) => void;
    removeCoffeCart: (data: CoffeData) => void;
    cart: CoffeCartData[];
}