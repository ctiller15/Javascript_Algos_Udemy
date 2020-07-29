const recursiveRange = require('./recursiveRange');

describe('recursiveRange', () => {
	const testCases = [
		{
			input: 6,
			output: 21
		},
		{
			input: 10,
			output: 55
		},
	];

	testCases.forEach(test => {
		it(`knows that the range of ${test.input} is ${test.output}`, () => {
			expect(recursiveRange(test.input)).toBe(test.output);
		});
	});
});
