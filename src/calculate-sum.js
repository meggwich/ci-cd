export function calculateSum (purchases, applyDiscount) {

    const sum = purchases.reduce((total, item) => {
        return total + (item.price * item.count);
    }, 0);    

    if (applyDiscount) {
        return sum * 0.5;
    } 
    
    return sum;

}