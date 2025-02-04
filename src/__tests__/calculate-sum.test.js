import { calculateSum  } from "../calculate-sum";

const purchases = [
	{
		id: 77,
		name: 'Javascript',
		price: 2000,
		count: 2
	},
	{
		id: 77,
		name: 'Python',
		price: 1000,
		count: 1
	},
	{
		id: 77,
		name: 'Rust',
		price: 5001.320458435,
		count: 1
	}
]

test('Calculte total sum without discount', () => {
	const result = calculateSum(purchases);
	expect(result).toBeCloseTo(10001.32);
});


test('Calculte total sum with discount', () => {
	const result = calculateSum(purchases, true);
	expect(result).toBeCloseTo(5000.66);
});