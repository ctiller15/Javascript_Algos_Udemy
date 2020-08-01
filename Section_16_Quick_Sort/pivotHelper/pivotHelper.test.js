const pivotHelper = require('./pivotHelper');

describe('pivotHelper', () => {
	const testCases = [
		{
			inputArr: [3, 5, 4, 2, 1],
			outputArr: [1, 2, 3, 5, 4],
			pivotPoint: 2,
		},
		{
			inputArr: [10, 5, 2, 1, -5, 17, 42, 7],
			outputArr: [7, 5, 2, 1, -5, 10, 42, 17],
			pivotPoint: 5,
		},
	];

	const subTestCases = [
		{
			inputArr: [1, 2, 3, 5, 4],
			outputArr: [1, 2, 3, 4, 5],
			startInd: 3,
			endInd: 4,
			pivotPoint: 4
		}
	];

	testCases.forEach(test => {
		it(`modifies the original array from ${test.inputArr} to ${test.outputArr} and recognizes that the pivot point is at index ${test.pivotPoint}`, () => {
			let inputArr = test.inputArr;
			const pivotPoint = pivotHelper(inputArr, 0, inputArr.length - 1);
			expect(inputArr).toEqual(test.outputArr);
			expect(pivotPoint).toBe(test.pivotPoint);
		});
	});

	subTestCases.forEach(test => {
		it(`handles sub sorts without creating a new array for ${test.inputArr} to ${test.outputArr}`, () => {
			const pivotPoint = pivotHelper(test.inputArr, test.startInd, test.endInd);
			expect(test.inputArr).toEqual(test.outputArr);
			expect(pivotPoint).toBe(test.pivotPoint);
		});
	});
});
