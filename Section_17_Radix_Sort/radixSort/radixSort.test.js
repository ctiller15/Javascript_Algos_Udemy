const radixSort = require('./radixSort');

describe('radixSort', () => {
	const testCases = [
		{
			arr: [5, 4, 3, 2, 1],
			result: [1, 2, 3, 4, 5],
		},
		{
			arr: [54, 23, 74, 10, 5, 17, 354, 1000, 60002],
			result: [5, 10, 17, 23, 54, 74, 354, 1000, 60002]
		}
	];

	testCases.forEach(test => {
		it(`should sort ${test.arr} into ${test.result}`, () => {
			expect(radixSort(test.arr)).toEqual(test.result);
		});
	});
});
