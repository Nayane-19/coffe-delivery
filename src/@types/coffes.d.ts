import { ReactNode } from "react";

export interface CoffeData {
    id: number;
    image: string;
    tags: string[];
    name: string;
    description: string;
    value: number;
    quantity: number;
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