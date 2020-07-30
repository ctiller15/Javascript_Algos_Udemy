const linearSearch = require('./linearSearch');

describe('linearSearch', () => {
	const testCases = [
		{
			arr: [10, 15, 20, 25, 30],
			value: 15,
			resultInd: 1,
		},
		{
			arr: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
			value: 4,
			resultInd: 5,
		},
		{
			arr: [100],
			value: 100,
			resultInd: 0,
		},
		{
			arr: [1, 2, 3, 4, 5],
			value: 6,
			resultInd: -1,
		},
		{
			arr: [9, 8, 7, 6, 5, 4, 3, 2, 1],
			value: 10,
			resultInd: -1,
		},
		{
			arr: [100],
			value: 200,
			resultInd: -1,
		},
	];

	testCases.forEach(test => {
		it(`finds the index of ${test.value} in the array ${test.arr}`, () => {
			expect(linearSearch(test.arr, test.value)).toBe(test.resultInd);
		});
	});
});

