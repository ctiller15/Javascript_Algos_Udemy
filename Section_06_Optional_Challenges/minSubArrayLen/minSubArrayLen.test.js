const minSubArrayLen = require('./minSubArrayLen');

describe('minSubArrayLen', () => {
	const testCases = [
		{
			arr: [2, 3, 1, 2, 4, 3],
			targetSum: 7,
			minLen: 2
		},
		{
			arr: [2, 1, 6, 5, 4],
			targetSum: 9,
			minLen: 2
		},
		{
			arr: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19],
			targetSum: 52,
			minLen: 1
		},
		{
			arr: [1, 4, 16, 22, 5, 7, 8, 9, 10],
			targetSum: 39,
			minLen: 3
		},
		{
			arr: [1, 4, 16, 22, 5, 7, 8, 9, 10],
			targetSum: 55,
			minLen: 5
		},
		{
			arr: [4, 3, 3, 8, 1, 2, 3],
			targetSum: 11,
			minLen: 2
		},
		{
			arr: [1, 4, 16, 22, 5, 7, 8, 9, 10],
			targetSum: 95,
			minLen: 0
		},
	];

	testCases.forEach(test => {
		it(`can tell that the minimum sub array length for ${test.arr} is ${test.minLen}`, () => {
			expect(minSubArrayLen(test.arr, test.targetSum)).toBe(test.minLen);
		});
	});
});
