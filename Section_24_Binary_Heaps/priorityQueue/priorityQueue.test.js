const PriorityQueue = require('./priorityQueue');

describe('enqueue', () => {
	const testCases = [
		{
			values: [6, 5, 4, 3, 2, 1],
			result: [1, 3, 2, 6, 4, 5]	
		},
		{
			values: [55, 12, 27, 18, 33, 39, 41],
			result: [12, 18, 27, 55, 33, 39, 41]
		},
		{
			values: [41, 39, 33, 18, 27, 12, 55],
			result: [12, 27, 18, 41, 33, 39, 55]
		}
	];

	testCases.forEach(test => {
		it(`puts [${test.values}] into a priority queue`, () => {
			const queue = new PriorityQueue();

			test.values.forEach(val => {
				queue.enqueue(val, val);
			});

			expect(queue.values.map(m => m.val)).toEqual(test.result);
		});
	});

	
});

describe('dequeue', () => {
	const testCases = [
		{
			values: [1, 2, 3],
			result: [2, 3],
			extracted: 1
		},
		{
			values: [1, 3, 2, 6, 4, 5],
			result: [2, 3, 5, 6, 4],
			extracted: 1,
		},
		{
			values: [12, 18, 27, 55, 33, 39, 41],
			result: [18, 33, 27, 55, 41, 39],
			extracted: 12
		}
	];

	testCases.forEach(test => {
		it(`extracts ${test.extracted} from [${test.values}]`, () => {
			const queue = new PriorityQueue();

			test.values.forEach(val => {
				queue.enqueue(val, val);
			});

			const extracted = queue.dequeue();

			expect(extracted.val).toBe(test.extracted);
			expect(queue.values.map(m => m.val)).toEqual(test.result);
		});
	});
});
