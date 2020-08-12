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

describe('shift', () => {
	const testCases = [
		{
			init: [],
			length: 0,
			returnedVal: undefined,
		},
		{
			init: [10],
			length: 0,
			returnedVal: 10
		},
		{
			init: [10, 20],
			length: 1,
			returnedVal: 10
		}
	];

	testCases.forEach(test => {
		it(`shifts the first head from [${test.init}]`, () => {
			const linkedList = new DoublyLinkedList();

			test.init.forEach(val => {
				linkedList.push(val);
			});

			const returned = linkedList.shift();

			result = returned ? returned.val : returned;

			expect(result).toBe(test.returnedVal);
			expect(linkedList.length).toBe(test.length);
		});
	});
});

describe('unshift', () => {
	const testCases = [
		{
			val: 42,
			init: [],
			length: 1,
			headVal: 42,
			tailVal: 42
		},
		{
			val: 9001,
			init: [64],
			length: 2,
			headVal: 9001,
			tailVal: 64
		},
		{
			val: 867,
			init: [5, 30, 9],
			length: 4,
			headVal: 867,
			tailVal: 9
		},
	];

	testCases.forEach(test => {
		it(`unshifts a new node to the head.`, () => {
			const linkedList = new DoublyLinkedList();

			test.init.forEach(val => {
				linkedList.push(val);
			});

			linkedList.unshift(test.val);

			expect(linkedList.length).toBe(test.length);
			expect(linkedList.head.val).toBe(test.headVal);
			expect(linkedList.tail.val).toBe(test.tailVal);
		});
	});
});

describe('get', () => {
	const testCases = [
		{
			init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			ind: -5,
			resultVal: null
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			ind: 20,
			resultVal: null
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			ind: 0,
			resultVal: 1
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			ind: 2,
			resultVal: 3
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			ind: 8,
			resultVal: 9
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			ind: 9,
			resultVal: 10
		},
	];

	testCases.forEach(test => {
		it(`gets a node from [${test.init}] at position ${test.ind}`, () => {
			const linkedList = new DoublyLinkedList();

			test.init.forEach(val => {
				linkedList.push(val);
			});

			const response = linkedList.get(test.ind);

			result = response ? response.val : response;

			expect(result).toBe(test.resultVal);
		});
	});
});

describe('set', () => {
	const testCases = [
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: 5,
			val: 42,
			result: true
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: 50,
			val: 42,
			result: false
		},

	];

	testCases.forEach(test => {
		it(`sets the value of [${test.init}] to ${test.val} at position ${test.index}`, () => {
			const linkedList = new DoublyLinkedList();

			test.init.forEach(val => {
				linkedList.push(val);
			});

			const response = linkedList.set(test.index, test.val);
			expect(response).toBe(test.result);
		});
	});
});

describe('insert', () => {
	const testCases = [
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: 0,
			val: 42,
			length: 8,
			result: true
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: 7,
			val: 42,
			length: 8,
			result: true
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: 4,
			val: 42,
			length: 8,
			result: true
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: -5,
			val: 42,
			length: 8,
			result: false
		},
		{
			init: [1, 2, 3, 4, 5, 6, 7],
			index: 10,
			val: 42,
			length: 8,
			result: false
		}
	];

	testCases.forEach(test => {
		it(`inserts inside [${test.init}] to ${test.val} at position ${test.index}`, () => {
			const linkedList = new DoublyLinkedList();

			test.init.forEach(val => {
				linkedList.push(val);
			});

			const response = linkedList.insert(test.index, test.val);
			expect(response).toBe(test.result);
		});
	});
});

describe('remove', () => {
	const testCases = [
		{
			init: [1, 2, 3, 4, 5, 6],
			ind: -10,
			result: undefined,
		},
		{
			init: [1, 2, 3, 4, 5, 6],
			ind: 10,
			result: undefined,
		},
		{
			init: [1, 2, 3, 4, 5, 6],
			ind: 0,
			result: 1,
		},
		{
			init: [1, 2, 3, 4, 5, 6],
			ind: 5,
			result: 6,
		},
		{
			init: [1, 2, 3, 4, 5, 6],
			ind: 4,
			result: 5,
		},
		{
			init: [1, 2, 3, 4, 5, 6],
			ind: 2,
			result: 3,
		}
	];

	testCases.forEach(test => {
		it(`removes from [${test.init}}] at position ${test.ind}`, () => {
			const linkedList = new DoublyLinkedList();

			test.init.forEach(val => {
				linkedList.push(val);
			});

			const response = linkedList.remove(test.ind);
			expect(response ? response.val : response).toBe(test.result);
		});
	});
});
