const BinarySearchTree = require('./breadthFirstSearch');

describe('breadthFirstSearch', () => {
	const testCases = [
	{
		init: [],
		result: []
	},{
		init: [10],
		result: [10]
	},
		{
			init: [10, 6],
			result: [10, 6]
		},
		{
			init: [10, 6, 3],
			result: [10, 6, 3]
		},
		{
			init: [10, 6, 3, 1],
			result: [10, 6, 3, 1]
		}, 
		{
			init: [10, 15],
			result: [10, 15]
		},
		{
			init: [10, 6, 15],
			result: [10, 6, 15]
		},
		{
			init: [10, 15, 6],
			result: [10, 6, 15]
		},
		{
			init: [10, 15, 6, 20, 8, 3],
			result: [10, 6, 15, 3, 8, 20]
		},
		{
			init: [10, 15, 6, 20, 8, 3, 13, 1, 4, 7, 9, 21, 16, 14, 11],
			result: [10, 6, 15, 3, 8, 13, 20, 1, 4, 7, 9, 11, 14, 16, 21]
		}
	];

	testCases.forEach(test => {
		it(`traverses for breadth first correctly.`, () => {
		const tree = new BinarySearchTree();

		test.init.forEach(val => {
			tree.insert(val);
		});

		const searchResult = tree.breadthFirstSearch();

		expect(searchResult).toEqual(test.result);
	
		});
	});
});
