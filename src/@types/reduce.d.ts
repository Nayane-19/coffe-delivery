export interface CoffeReduce {
    cart: CoffeData[];
    totalPayment: CartTotal;
    address: AddressDataForm;
    paymentMethod: string;
}

export interface StateStore {
    CoffePersistentState: CoffeReduce;
}