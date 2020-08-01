const mergeSort = require('./mergeSort');

describe('mergeSort', () => {
	const testCases = [
		{
			input: [6, 5, 4, 3, 2, 1],
			result: [1, 2, 3, 4, 5, 6]
		},
		{
			input: [0, 9, 54, 2, 903, 17, 6],
			result: [0, 2, 6, 9, 17, 54, 903]
		},
		{
			input: [105],
			result: [105]
		}
	];

	testCases.forEach(test => {
		it(`sorts ${test.input} into ${test.result}`, () => {
			expect(mergeSort(test.input)).toEqual(test.result);
		});
	});

});
