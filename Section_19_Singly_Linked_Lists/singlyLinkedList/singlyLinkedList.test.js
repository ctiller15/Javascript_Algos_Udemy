const SinglyLinkedList = require('./singlyLinkedList');

describe('push', () => {
	const testCases = [
		{
			pushedVals: [5],
			headVal: 5,
			tailVal: 5,
			length: 1
		},
		{
			pushedVals: [5, 6],
			headVal: 5,
			tailVal: 6,
			length: 2
		},
		{
			pushedVals: [-10, 30, 15, 2, 7],
			headVal: -10,
			tailVal: 7,
			length: 5
		}
	];

	testCases.forEach(test => {
		it(`pushes the values [${test.pushedVals}] into a linked list.`,() => {

			const linkedList = new SinglyLinkedList();
			test.pushedVals.forEach(val => {
				linkedList.push(val);
			});

			expect(linkedList.head.val).toBe(test.headVal);
			expect(linkedList.tail.val).toBe(test.tailVal);
			expect(linkedList.length).toBe(test.length);
		});
	});
});
