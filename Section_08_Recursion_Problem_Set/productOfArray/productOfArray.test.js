const productOfArray = require('./productOfArray');

describe('productOfArray', () => {
	const testCases = [
		{
			arr: [1, 2, 3],
			result: 6,
		},
		{
			arr: [1, 2, 3, 10],
			result: 60
		}
	];

	testCases.forEach(test => {
		it(`should calculate the sum of ${test.arr} as ${test.result}`, () => {
			expect(productOfArray(test.arr)).toBe(test.result);
		});
	});
});
