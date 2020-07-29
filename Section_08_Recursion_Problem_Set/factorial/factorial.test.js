const factorial = require('./factorial');

describe('factorial', () => {
	const testCases = [
		{
			input: 1,
			output: 1
		},
		{
			input: 2,
			output: 2
		},
		{
			input: 4,
			output: 24
		},
		{
			input: 7,
			output: 5040
		},
	];

	testCases.forEach(test => {
		it(`knows that the factorial of ${test.input} is ${test.output}`, () => {
			expect(factorial(test.input)).toBe(test.output);
		});
	});
});
