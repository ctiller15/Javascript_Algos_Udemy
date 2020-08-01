const quickSort = require('./quickSort');

describe('quickSort', () => {
	const testCases = [
		{
			inputArr: [5, 4, 3, 2, 1],
			outputArr: [1, 2, 3, 4, 5],
		},
		{
			inputArr: [8, 6, 7, 5, 3, 0, 9],
			outputArr: [0, 3, 5, 6, 7, 8, 9]
		},
		{
			inputArr: [3, -54, 12, 4556, 9, 90, -12, 123, 5.64, 10],
			outputArr: [-54, -12, 3, 5.64, 9, 10, 12, 90, 123, 4556]
		}
	];

	testCases.forEach(test => {
		it(`should sort ${test.inputArr} into ${test.outputArr}`, () => {
			quickSort(test.inputArr);
			expect(test.inputArr).toEqual(test.outputArr);
		});
	});
});
