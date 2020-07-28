const maxSubarraySum = require('./maxSubarraySum');

describe('maxSubarraySum', () => {
	const testCases = [
		{
			arr: [100, 200, 300, 400],
			len: 2,
			result: 700
		},
		{
			arr: [1, 4, 2, 10, 23, 3, 1, 0, 20],
			len: 4,
			result: 39
		},
		{
			arr: [-3, 4, 0, -2, 6, -1],
			len: 2,
			result: 5
		},
		{
			arr: [3, -2, 7, -4, 1, -1, 4, -2, 1],
			len: 2,
			result: 5
		},
		{
			arr: [2, 3],
			len: 3,
			result: null
		},
	];

	testCases.forEach(test => {
		it(`gets the maximum subarray sum of ${test.arr} with a subarray length of ${test.len}`, () => {
			expect(maxSubarraySum(test.arr, test.len)).toBe(test.result);
		});
	});
});
