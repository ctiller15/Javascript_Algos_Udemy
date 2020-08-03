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

describe('pop', () => {
	const testCases = [
		{
			pushedVals: [1, 2, 3],
			tailVal: 2,
			removed: 3,
			length: 2
		},
		{
			pushedVals: [],
			tailVal: null,
			removed: undefined,
			length: 0
		},
		{
			pushedVals: [9000],
			tailVal: null,
			removed: 9000,
			length: 0
		}
	];

	testCases.forEach(test => {
		it(`pops off the last element and sets the tail of ${test.removed}`, () => {
			const linkedList = new SinglyLinkedList();
			test.pushedVals.forEach(val => {
				linkedList.push(val);
			});

			const removed = linkedList.pop();

			const tailVal = linkedList.tail ? linkedList.tail.val : null;
			
			expect(removed).toBe(test.removed);
			expect(tailVal).toBe(test.tailVal);
			expect(linkedList.length).toBe(test.length);
		});
	});
});

describe('shift', () => {
	const testCases = [
		{
			pushedVals: [1, 2, 3],
			headVal: 2,
			length: 2,
			shifted: 1
		},
		{
			pushedVals: [],
			headVal: null,
			length: 0,
			shifted: undefined
		}
	];

	testCases.forEach(test => {
		it(`shifts the first element from the list from ${test.pushedVals}`, () => {
			const linkedList = new SinglyLinkedList();

			test.pushedVals.forEach(val => {
				linkedList.push(val);
			});

			const shifted = linkedList.shift();
			const headVal = linkedList.head ? linkedList.head.val : null;
			expect(shifted).toBe(test.shifted);
			expect(headVal).toBe(test.headVal);
			expect(linkedList.length).toBe(test.length);
		});
	});
});

describe('unshift', () => {
	const testCases = [
		{
			initial: [],
			val: 10,
			length: 1,
			next: null,
		},
		{
			initial: [1, 2, 3, 4, 5],
			val: 6,
			length: 6,
			next: 1
		},
	];

	testCases.forEach(test => {
		it(`unshifts ${test.val} into [${test.initial}]`, () => {
			const linkedList = new SinglyLinkedList();

			test.initial.forEach(val => {
				linkedList.push(val);
			});

			linkedList.unshift(test.val);

			const nextVal = linkedList.head.next ? linkedList.head.next.val : null;

			expect(linkedList.head.val).toBe(test.val);
			expect(linkedList.length).toBe(test.length);
			expect(nextVal).toBe(test.next);
		});
	});
});

describe('get', () => {
	const testCases = [
		{
			initial: [1, 2, 3, 4, 5],
			pos: -5,
			result: null
		},
		{
			initial: [1, 2, 3, 4, 5],
			pos: 10,
			result: null
		},
		{
			initial: [1, 2, 3, 4, 5],
			pos: 2,
			result: 3
		},
		{
			initial: [1, 2, 3, 4, 5],
			pos: 4, 
			result: 5
		},
		{
			initial: [1, 2, 3, 4, 5],
			pos: 0,
			result: 1
		}
	];

	testCases.forEach(test => {
		it(`finds the element at position ${test.position} for [${test.initial}]`, () => {
			const linkedList = new SinglyLinkedList();

			test.initial.forEach(elem => {
				linkedList.push(elem);
			});

			const result = linkedList.get(test.pos);

			expect(result ? result.val : result).toBe(test.result);

		});
	});
});

describe('set', () => {
	const testCases = [
		{
			initial: [1, 2, 3, 4, 5],
			value: 20,
			pos: -5,
			result: null
		},
		{
			initial: [1, 2, 3, 4, 5],
			value: 20,
			pos: 10,
			result: null
		},
		{
			initial: [1, 2, 3, 4, 5],
			value: 10,
			pos: 2,
			result: 10
		},
		{
			initial: [1, 2, 3, 4, 5],
			value: 9001,
			pos: 4, 
			result: 9001
		},
		{
			initial: [1, 2, 3, 4, 5],
			value: 42,
			pos: 0,
			result: 42
		}
	];

	testCases.forEach(test => {
		it(`sets the element at position ${test.pos} for [${test.initial} to ${test.value}]`, () => {
			const linkedList = new SinglyLinkedList();

			test.initial.forEach(val => {
				linkedList.push(val);
			});

			linkedList.set(test.pos, test.value);
			
			const result = linkedList.get(test.pos);
			expect(result ? result.val : result).toBe(test.result);
		});
	});
});

describe('insert', () => {
	const testCases = [
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: -50,
			value: 17,
			result: null,
			length: 7,
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 20,
			value: 17,
			result: null,
			length: 7
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 0,
			value: 17,
			result: 17,
			length: 8
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 7,
			value: 42,
			result: 42,
			length: 8
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 2,
			value: 17,
			result: 17,
			length: 8
		},
		{
			initial: [1, 2, 3, 4, 5],
			ind: 5,
			value: 645,
			result: 645,
			length: 6
		}
	];

	testCases.forEach(test => {
		it(`inserts into [${test.initial}] at position ${test.ind}`, () => {
		const linkedList = new SinglyLinkedList();

		test.initial.forEach(val => {
			linkedList.push(val);
		});

		linkedList.insert(test.ind, test.value);

		const result = linkedList.get(test.ind);
		expect(result ? result.val : result).toBe(test.result);
		expect(linkedList.length).toBe(test.length);	
		});
	});
});

describe('remove', () => {
	const testCases = [
		{
			initial: [1, 2, 3, 4, 5],
			ind: 4,
			result: null,
			length: 4
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: -50,
			result: null,
			length: 7,
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 20,
			result: null,
			length: 7
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 0,
			result: 2,
			length: 6
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 6,
			result: null,
			length: 6
		},
		{
			initial: [22, 2, 77, 6, 43, 76, 89],
			ind: 2,
			result: 6,
			length: 6
		},
		{
			initial: [1, 2, 3, 4, 5],
			ind: 4,
			result: null,
			length: 4
		}
	];

	testCases.forEach(test => {
		it(`should try to remove the item at index ${test.ind} from [${test.initial}]`, () => {
			const linkedList = new SinglyLinkedList();

			test.initial.forEach(val => {
				linkedList.push(val);
			});

			linkedList.remove(test.ind);

			const result = linkedList.get(test.ind);

			expect(linkedList.length).toBe(test.length);
			expect(result ? result.val : result).toBe(test.result);
		});
	});
});

describe('reverse', () => {
	const testCases = [
		{
			initial: [1, 2, 3, 4, 5],
			resultHead: 5,
			resultTail: 1
		},
		{
			initial: [42, 9001, 76, 78],
			resultHead: 78,
			resultTail: 42
		}, 
		{
			initial: [5, 10],
			resultHead: 10,
			resultTail: 5
		},
		{
			initial: [67],
			resultHead: 67,
			resultTail: 67
		}
	];

	testCases.forEach(test => {
		it(`reverses the values [${test.initial}] in place.`, () => {
			const linkedList = new SinglyLinkedList();

			test.initial.forEach(val => {
				linkedList.push(val);
			});

			linkedList.reverse();

			expect(linkedList.head.val).toBe(test.resultHead);
			expect(linkedList.tail.val).toBe(test.resultTail);
			expect(linkedList.tail.next).toBe(null);
		});
	});
});
