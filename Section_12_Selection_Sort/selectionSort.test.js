const selectionSort = require('./selectionSort');

describe('selectionSort', () => {
	const testCases = [
		{
			arr: [5, 4, 3, 2, 1],
			sorted: [1, 2, 3, 4, 5]
		},
		{
			arr: [32, 55, 1, -5, 33, 96, 15, 3, 7],
			sorted: [-5, 1, 3, 7, 15, 32, 33, 55, 96]
		}
	];

	testCases.forEach(test => {
		it(`sorts ${test.arr}`, () => {
			expect(selectionSort(test.arr)).toEqual(test.sorted);
		});

	});
});
