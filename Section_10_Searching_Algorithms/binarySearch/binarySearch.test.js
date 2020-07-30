const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
	const testCases = [
		{
			arr: [1, 2, 3, 4, 5],
			val: 2,
			elem: 1,
		},
		{
			arr: [1, 2, 3, 4, 5],
			val: 3,
			elem: 2,
		},
		{
			arr: [1, 2, 3, 4, 5],
			val: 5,
			elem: 4,
		},
		{
			arr: [1, 2, 3, 4, 5],
			val: 6,
			elem: -1,
		},
		{
			arr: [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
			val: 10,
			elem: 2,
		},
		{
			arr: [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
			val: 95,
			elem: 16,
		},
		{
			arr: [5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99],
			val: 100,
			elem: -1,
		},
	];

	testCases.forEach(test => {
		it(`finds ${test.val} in ${test.arr}`, () => {
			expect(binarySearch(test.arr, test.val)).toBe(test.elem);
		} );
	});
});
