const DoublyLinkedList = require('./doublyLinkedList');

describe('push', () => {
	const testCases = [
		{
			pushList: [10],
			resultHead: 10,
			resultHeadNext: null,
			resultTail: 10,
			resultTailPrev: null,
			length: 1
		},
		{
			pushList: [10, 20],
			resultHead: 10,
			resultHeadNext: 20,
			resultTail: 20,
			resultTailPrev: 10,
			length: 2
		},
		{
			pushList: [10, 20, -50],
			resultHead: 10,
			resultHeadNext: 20,
			resultTail: -50,
			resultTailPrev: 20,
			length: 3
		},
	];

	testCases.forEach(test => {
		it(`pushes [${test.pushList}] to the doublyLinkedList`, () => {
			const linkedList = new DoublyLinkedList();

			test.pushList.forEach(val => {
				linkedList.push(val);
			});

			expect(linkedList.head.val).toBe(test.resultHead);
			expect(linkedList.head.next ? linkedList.head.next.val : null).toBe(test.resultHeadNext);
			expect(linkedList.tail.val).toBe(test.resultTail);
			expect(linkedList.tail.prev ? linkedList.tail.prev.val : null).toBe(test.resultTailPrev);
			expect(linkedList.length).toBe(test.length);
		});
	});

});


describe('pop', () => {
	const testCases = [
		{
			init: [],
			length: 0,
			returnedVal: undefined
		},
		{
			init: [10],
			length: 0,
			returnedVal: 10
		},
		{
			init: [10, 20, 30],
			length: 2,
			returnedVal: 30
		},
	];
	testCases.forEach(test => {
		it(`pops off the last item from [${test.init}]`, () => {
			const linkedList = new DoublyLinkedList();
			
			test.init.forEach(val => {
				linkedList.push(val);
			});

			returned = linkedList.pop();

			result = returned ? returned.val : returned;

			expect(result).toBe(test.returnedVal);
			expect(linkedList.length).toBe(test.length);
		});
	});
});
