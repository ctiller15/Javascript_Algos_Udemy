const mergeArrays = require('./mergeArrays');

describe('mergeArrays', () => {
	const testCases = [
		{
			arr1: [1, 4, 6],
			arr2: [2, 3, 5],
			result: [1, 2, 3, 4, 5, 6]
		},
		{
			arr1: [1, 4, 6],
			arr2: [2, 3, 5, 8, 10, 12],
			result: [1, 2, 3, 4, 5, 6, 8, 10, 12]
		},
		{
			arr1: [1, 10, 50, 75, 76, 89],
			arr2: [2, 14, 99, 100],
			result: [1, 2, 10, 14, 50, 75, 76, 89, 99, 100],
		},
		{
			arr1: [4],
			arr2: [17],
			result: [4, 17]
		},
		{
			arr1: [7],
			arr2: [2, 3, 5],
			result: [2, 3, 5, 7]
		},
		{
			arr1: [],
			arr2: [],
			result: [],
		},
		{
			arr1: [],
			arr2: [10],
			result: [10],
		},
	];

	testCases.forEach(test => {
		it(`should merge the two arrays ${test.arr1} and ${test.arr2} into ${test.result}`, () => {
			expect(mergeArrays(test.arr1, test.arr2)).toEqual(test.result);
		});
	});
});
