const BinarySearchTree = require('./binarySearchTree');

describe('insert', () => {
	const testCases = [
		{
			values: [30],
			root: 30,
			rootLeft: null,
			rootRight: null
		},
		{
			values: [30, 10],
			root: 30,
			rootLeft: 10,
			rootRight: null
		},
		{
			values: [30, 50],
			root: 30,
			rootLeft: null,
			rootRight: 50
		},
	];

	testCases.forEach(test => {
		it(`inserts the values [${test.values}] into the tree.`, () => {
			const tree = new BinarySearchTree();

			test.values.forEach(val => {
				tree.insert(val);
			});

			expect(test.root).toBe(tree.root.value);
			expect(tree.root.left ? tree.root.left.value : tree.root.left).toBe(test.rootLeft);
			expect(tree.root.right ? tree.root.right.value : tree.root.right).toBe(test.rootRight);
		});
	});

	const secondLevel = [

		{
			values: [30, 10, 0],
			leftLeft: 0,
			leftRight: null,
			rightLeft: null,
			rightRight: null
		},
		{
			values: [30, 10, 0, 15],
			leftLeft: 0,
			leftRight: 15,
			rightLeft: null,
			rightRight: null
		},
		
	];

	secondLevel.forEach(test => {
		it(`inserts values into the second level for [${test.values}]`, () => {
			const tree = new BinarySearchTree();
			
			test.values.forEach(val => {
				tree.insert(val);
			});

			if(tree.root.left){
				expect(tree.root.left.left ? tree.root.left.left.value : null).toBe(test.leftLeft);
				expect(tree.root.left.right ? tree.root.left.right.value : null).toBe(test.leftRight);
			}

			if(tree.root.right){
				expect(tree.root.right.left ? tree.root.right.left.value : null).toBe(test.rightLeft);
				expect(tree.root.right.right ? tree.root.right.right.value : null).toBe(test.rightRight);
			}
		});
	});
});

describe('find', () => {
	const testCases = [
		{
			init: [30],
			find: 30,
			result: true
		},
		{
			init: [30, 10],
			find: 10,
			result: true
		},
		{
			init: [30],
			find: 31,
			result: false
		},
		{
			init: [30, 10, 50, 60],
			find: 60,
			result: true
		},
		{
			init: [30, 10, 50, 60],
			find: 6,
			result: false
		},
	];

	testCases.forEach(test => {
		it(`tries to find ${test.find}`, () => {
			const tree = new BinarySearchTree();

			test.init.forEach(val => {
				tree.insert(val);
			});

			expect(tree.find(test.find)).toBe(test.result);
		});
	});
});
