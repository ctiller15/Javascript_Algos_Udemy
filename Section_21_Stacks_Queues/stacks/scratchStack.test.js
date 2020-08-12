const Stack = require('./scratchStack.js');

describe('push', () => {
	const testCases = [
		{
			vals: [1],
			headVal: 1,
			lastVal: 1,
			size: 1
		},
		{
			vals: [1, 2, 3, 4, 5],
			headVal: 5,
			lastVal: 1,
			size: 5
		},
	];

	testCases.forEach(test => {
		it(`pushes onto the stack`, () => {
			const stack = new Stack();
			
			test.vals.forEach(val => {
				stack.push(val);
			});

			expect(stack.first.value).toBe(test.headVal);
			expect(stack.last.value).toBe(test.lastVal);
			expect(stack.size).toBe(test.size);
		});
	});
});

describe('pop', () => {
	const testCases = [
		{
			init: [],
			firstVal: null,
			lastVal: null,
			resultNext: undefined,
			size: 0
		},
		{
			init: [1],
			firstVal: null,
			lastVal: null,
			resultNext: 1,
			size: 0
		},
		{
			init: [1, 2, 3, 4, 5],
			firstVal: 4,
			lastVal: 1,
			resultNext: 5,
			size: 4
		},
	];

	testCases.forEach(test => {
		it(`pops from the stack`, () => {
			const stack = new Stack();
			test.init.forEach(val => {
				stack.push(val);
			});

			const result = stack.pop();

			expect(result ? result.value : result).toBe(test.resultNext);
			expect(stack.first ? stack.first.value : stack.first).toBe(test.firstVal);
			expect(stack.last ? stack.last.value : stack.last).toBe(test.lastVal);
			expect(stack.size).toBe(test.size);
		});
	});
});
