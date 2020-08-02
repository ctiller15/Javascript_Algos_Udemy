const getDigit = require('./getDigit');

describe('getDigit', () => {
	const testCases = [
		{
			num: 12345,
			digit: 0,
			result: 5,
		},
		{
			num: 12345,
			digit: 1,
			result: 4,
		},
		{
			num: 12345,
			digit: 2,
			result: 3,
		},
		{
			num: 12345,
			digit: 3,
			result: 2,
		},
		{
			num: 12345,
			digit: 4,
			result: 1,
		},
		{
			num: 12345,
			digit: 5,
			result: 0,
		},
		{
			num: -12345,
			digit: 0,
			result: 5,
		},
		{
			num: -12345,
			digit: 1,
			result: 4,
		},
		{
			num: -12345,
			digit: 2,
			result: 3,
		},
		{
			num: -12345,
			digit: 3,
			result: 2,
		},
		{
			num: -12345,
			digit: 4,
			result: 1,
		},
		{
			num: -12345,
			digit: 5,
			result: 0,
		},
	];

	testCases.forEach(test => {
		it(`finds that the digit at position ${test.digit} of ${test.num} is ${test.result}`, () => {
			expect(getDigit(test.num, test.digit)).toBe(test.result);
		});
	});
});
