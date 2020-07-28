const areThereDuplicates = require('./areThereDuplicates');

describe('areThereDuplicates', () => {
	const testCases = [
		{
			functionArguments: [1, 2, 3],
			result: false
		},
		{
			functionArguments: [1, 2, 2],
			result: true
		},
		{
			functionArguments: ['a', 'b', 'c', 'a'],
			result: true
		}
	];

	testCases.forEach(test => {
		it(`sees that there ${test.result ? 'are' : 'are not'} duplicates.`, () => {
			expect(areThereDuplicates(...test.functionArguments)).toBe(test.result);		
		});
	});
});
