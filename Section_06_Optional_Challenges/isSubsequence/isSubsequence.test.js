const isSubsequence = require('./isSubsequence');

describe('isSubsequence', () => {
	const testCases = [
		{
			sub: 'hello',
			full: 'hello world',
			result: true,
		},
		{
			sub: 'sing',
			full: 'sting',
			result: true,
		},
		{
			sub: 'abc',
			full: 'abracadabra',
			result: true,
		},
		{
			sub: 'abc',
			full: 'acb',
			result: false,
		},
	];

	testCases.forEach(test => {
		it(`sees that the sequence ${test.sub} ${test.result ? 'does' : 'does not'} exist within ${test.full}`, () => {
			expect(isSubsequence(test.sub, test.full)).toBe(test.result);
		});
	});
});
