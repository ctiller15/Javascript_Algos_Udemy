const BinarySearchTree = require('./depthFirstSearch');

describe('preorder', () => {
	const testCases = [
		{
			init: [],
			result: [],
		},
		{
			init: [10],
			result: [10],
		},
		{
			init: [10, 6],
			result: [10, 6],
		},
		{
			init: [10, 15, 6],
			result: [10, 6, 15],
		},
		{
			init: [10, 15, 6, 8, 3, 20],
			result: [10, 6, 3, 8, 15, 20]
		}

	];

	testCases.forEach(test => {
		it(`traverses a tree composed o ${test.init} depth-first preorder`, () => {
			const tree = new BinarySearchTree();

			test.init.forEach(val => {
				tree.insert(val);
			});

			const result = tree.depthFirstSearchPreorder();

			expect(test.result).toEqual(result);
		}); 
	});
});

describe('postorder', () => {
	const testCases = [
		{
			init: [],
			result: [],
		},
		{
			init: [10],
			result: [10],
		},
		{
			init: [10, 6],
			result: [6, 10],
		},
		{
			init: [10, 15, 6],
			result: [6, 15, 10],
		},
		{
			init: [10, 15, 6, 8, 3, 20],
			result: [3, 8, 6, 20, 15, 10]
		}

	];

	testCases.forEach(test => {
		it(`traverses a tree composed o ${test.init} depth-first preorder`, () => {
			const tree = new BinarySearchTree();

			test.init.forEach(val => {
				tree.insert(val);
			});

			const result = tree.depthFirstSearchPostOrder();

			expect(test.result).toEqual(result);
		}); 
	});
});

describe('inorder', () => {
	const testCases = [
		{
			init: [],
			result: [],
		},
		{
			init: [10],
			result: [10],
		},
		{
			init: [10, 6],
			result: [6, 10],
		},
		{
			init: [10, 15, 6],
			result: [6, 10, 15],
		},
		{
			init: [10, 15, 6, 8, 3, 20],
			result: [3, 6, 8, 10, 15, 20]
		}

	];

	testCases.forEach(test => {
		it(`traverses a tree composed o ${test.init} depth-first preorder`, () => {
			const tree = new BinarySearchTree();

			test.init.forEach(val => {
				tree.insert(val);
			});

			const result = tree.depthFirstSearchInOrder();

			expect(test.result).toEqual(result);
		}); 
	});
});


