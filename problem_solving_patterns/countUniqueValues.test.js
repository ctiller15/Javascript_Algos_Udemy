const countUniqueValues = require('./countUniqueValues');

describe('countuniquevalues', () => {
	const testCases = [
		{
			values: [1, 1, 1, 1, 1, 2],
			result: 2
		},
		{
			values: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13],
			result: 7
		},
		{
			values: [],
			result: 0
		},
		{
			values: [-2, -1, -1, 0, 1],
			result: 4
		},
	];

	testCases.forEach(test => {
		it(`should count ${test.result} unique values for ${test.values}` , () => {
			expect(countUniqueValues(test.values)).toBe(test.result);
		});
	});
});
