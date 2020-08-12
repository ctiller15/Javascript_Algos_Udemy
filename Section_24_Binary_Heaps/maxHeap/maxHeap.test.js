const MaxHeap = require('./maxHeap');

describe('maxHeapInsert', () => {
	const testCases = [
		{
			values: [1, 2, 3, 4, 5, 6],
			result: [6, 4, 5, 1, 3, 2]	
		},
		{
			values: [41, 39, 33, 18, 27, 12, 55],
			result: [55, 39, 41, 18, 27, 12, 33]
		}
	];

	testCases.forEach(test => {
		it(`puts [${test.values}] into a max heap.`, () => {
			const heap = new MaxHeap();

			test.values.forEach(val => {
				heap.insert(val);
			});

			expect(heap.values).toEqual(test.result);
		});
	});

	
});

describe('extractMax', () => {
	const testCases = [
		{
			values: [3, 2, 1],
			result: [2, 1],
			extracted: 3
		},
		{
			values: [6, 4, 5, 1, 3, 2],
			result: [5, 4, 2, 1, 3],
			extracted: 6,
		},
		{
			values: [55, 39, 41, 18, 27, 12, 33],
			result: [41, 39, 33, 18, 27, 12],
			extracted: 55
		}
	];

	testCases.forEach(test => {
		it(`extracts ${test.extracted} from [${test.values}]`, () => {
			const heap = new MaxHeap();

			test.values.forEach(val => {
				heap.insert(val);
			});

			const extracted = heap.extractMax();

			expect(extracted).toBe(test.extracted);
			expect(heap.values).toEqual(test.result);
		});
	});
});
