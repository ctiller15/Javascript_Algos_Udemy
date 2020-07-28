const averagePair = require('./averagePair');

describe('averagePair', () => {
	const testCases = [
		{
			ints: [1,2,3],
			avg: 2.5,
			result: true,
		},
		{
			ints: [1, 3, 3, 5, 6, 7, 10, 12, 19],
			avg: 8,
			result: true,
		},
		{
			ints: [-1, 0, 3, 4, 5, 6],
			avg: 4.1,
			result: false,
		},
		{
			ints: [],
			avg: 4,
			result: false,
		},
	];

	testCases.forEach(test => {
		it(`checks if an average pair of ${test.avg} exists within the array ${test.ints}`, () => {
			expect(averagePair(test.ints, test.avg)).toBe(test.result);
		});
	});
});
