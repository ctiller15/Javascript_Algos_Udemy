const fib = require('./fib.js');

describe('fib', () => {
	const testCases = [
		{
			ind: 4,
			number: 3
		},
		{
			ind: 10,
			number: 55
		},
		{
			ind: 28,
			number: 317811
		},
		{
			ind: 35,
			number: 9227465
		},
	];

	testCases.forEach(test => {
		it(`calculates the item in index ${test.ind} as ${test.number}`, () => {
			expect(fib(test.ind)).toBe(test.number);
		});
	});
});
