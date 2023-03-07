export const toMoney = (p: number) => {
    return p? p.toFixed(2).replace('.',',') : 'Gratuito';
}