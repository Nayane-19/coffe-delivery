export const toMoney = (p: number) => {
    return p? p.toFixed(2).replace('.',',') : '0,00';
}

export const deliveryValue = 10;