const mostDigits = require('./mostDigits');

describe('mostDigits', () => {
	const testCases = [
		{
			arr: [1234, 56, 7],
			max: 4
		},
		{
			arr: [1, 1, 11111, 1],
			max: 5
		},
		{
			arr: [12, 34, 56, 78],
			max: 2
		},
		{
			arr: [],
			max: 0
		}
	];

	testCases.forEach(test => {
		it(`knows that the highest number of digits for array ${test.arr} is ${test.max}`, () => {
			expect(mostDigits(test.arr)).toBe(test.max);
		});
	});
});
