export interface CoffeReduce {
    cart: CoffeData[];
    totalPayment: CartTotal;
    address: AddressDataForm;
    paymentMethod: string;
    modal: boolean;
}

export interface StateStore {
    CoffePersistentState: CoffeReduce;
}