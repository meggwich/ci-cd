import { calculateCashback } from '../cashback';

test.each([
    ['gold', 100000, 5000],
    ['silver', 10000, 200],
    ['regular', 1000, 10],
    ['no', 500, 0]
])('testing cashback function with %s status and %i amount', 
    (_, amount, expected) => {
    const result = calculateCashback(amount);
    expect(result).toBe(expected);
})