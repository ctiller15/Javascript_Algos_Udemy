const power = require('./power');

describe('power', () => {
	const testCases = [
		{
			num: 2,
			pow: 0,
			result: 1
		},
		{
			num: 2,
			pow: 2,
			result: 4
		},
		{
			num: 2,
			pow: 4,
			result: 16
		},
	];

	testCases.forEach(test => {
		it(`knows that ${test.num} to the power of ${test.pow} is ${test.result}`, () => {
			expect(power(test.num, test.pow)).toBe(test.result);
		});
	});
});
