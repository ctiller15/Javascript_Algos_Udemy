const digitCount = require('./digitCount');

describe('digitCount', () => {
	const testCases = [
		{
			num: 10,
			result: 2
		},
		{
			num: 100,
			result: 3
		},
		{
			num: 1000,
			result: 4
		},
		{
			num: 10000,
			result: 5
		},
		{
			num: 9000,
			result: 4
		},
		{
			num: -10,
			result: 2
		},
		{
			num: -100,
			result: 3
		},
		{
			num: -1000,
			result: 4
		},
		{
			num: 0,
			result: 1
		},
	];

	testCases.forEach(test => {
		it(`knows that ${test.num} has ${test.result} digits`, () => {
			expect(digitCount(test.num)).toBe(test.result);
		});
	});
});
