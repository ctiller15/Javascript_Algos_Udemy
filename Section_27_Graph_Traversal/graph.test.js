const Graph = require('./graph');

describe('depth first recursive', () => {
	const testCases = [
		{
			initVertices: ['a'],
			initEdges: [],
			startVal: 'a',
			visited: ['a']
		},
		{
			initVertices: ['a', 'b'],
			initEdges: [['a', 'b']],
			startVal: 'a',
			visited: ['a', 'b']
		},
		{
			initVertices: ['a', 'b', 'c'],
			initEdges: [['a', 'b'], ['b', 'c']],
			startVal: 'a',
			visited: ['a', 'b', 'c']
		},
		{
			initVertices: ['a', 'b', 'c'],
			initEdges: [['a', 'c'], ['b', 'c']],
			startVal: 'a',
			visited: ['a', 'c', 'b']
		},
		{
			initVertices: ['a', 'b', 'c', 'd'],
			initEdges: [['a', 'b'], ['b', 'c'], ['b', 'd']],
			startVal: 'a',
			visited: ['a', 'b', 'c', 'd']
		},
		{
			initVertices: ['a', 'b', 'c', 'd', 'e'],
			initEdges: [['a', 'b'], ['b', 'c'], ['b', 'd']],
			startVal: 'a',
			visited: ['a', 'b', 'c', 'd']
		},
		{
			initVertices: ['a', 'b', 'd', 'e', 'f', 'c'],
			initEdges: [
				['a', 'b'],
				['a', 'c'],
				['b', 'd'],
				['d', 'e'],
				['e', 'c'],
				['d', 'f'],
				['e', 'f'],
				['c', 'e']
			],
			startVal: 'a',
			visited: ['a', 'b',	'd','e','c', 'f'],
		},

	];

	testCases.forEach(test => {
		it(`traverses a graph recursively via dfs`, () => {

			const graph = new Graph();

			test.initVertices.forEach(vert => {
				graph.addVertex(vert);
			});

			test.initEdges.forEach(edges => {
				graph.addEdge(edges[0], edges[1]);
			});

			const result = graph.depthFirstSearchRecursive(test.startVal);

			expect(result).toEqual(test.visited);
		});
	});
});

describe('depth first iterative', () => {
	const testCases = [
		{
			initVertices: ['a'],
			initEdges: [],
			startVal: 'a',
			visited: ['a']
		},
		{
			initVertices: ['a', 'b'],
			initEdges: [['a', 'b']],
			startVal: 'a',
			visited: ['a', 'b']
		},
		{
			initVertices: ['a', 'b', 'c'],
			initEdges: [['a', 'b'], ['b', 'c']],
			startVal: 'a',
			visited: ['a', 'b', 'c']
		},
		{
			initVertices: ['a', 'b', 'c'],
			initEdges: [['a', 'c'], ['b', 'c']],
			startVal: 'a',
			visited: ['a', 'c', 'b']
		},
		{
			initVertices: ['a', 'b', 'c', 'd'],
			initEdges: [['a', 'b'], ['b', 'c'], ['b', 'd']],
			startVal: 'a',
			visited: ['a', 'b', 'd', 'c']
		},
		{
			initVertices: ['a', 'b', 'c', 'd', 'e'],
			initEdges: [['a', 'b'], ['b', 'c'], ['b', 'd']],
			startVal: 'a',
			visited: ['a', 'b', 'd', 'c']
		},
		{
			initVertices: ['a', 'b', 'd', 'e', 'f', 'c'],
			initEdges: [
				['a', 'b'],
				['a', 'c'],
				['b', 'd'],
				['d', 'e'],
				['e', 'c'],
				['d', 'f'],
				['e', 'f'],
				['c', 'e']
			],
			startVal: 'a',
			visited: ['a', 'c', 'e', 'f', 'd', 'b'],
		},

	];

	testCases.forEach(test => {
		it(`traverses a graph iteratively via dfs`, () => {

			const graph = new Graph();

			test.initVertices.forEach(vert => {
				graph.addVertex(vert);
			});

			test.initEdges.forEach(edges => {
				graph.addEdge(edges[0], edges[1]);
			});

			const result = graph.depthFirstSearchIterative(test.startVal);

			expect(result).toEqual(test.visited);
		});
	});
});

describe('breadth first iterative', () => {
	const testCases = [
		{
			initVertices: ['a'],
			initEdges: [],
			startVal: 'a',
			visited: ['a']
		},
		{
			initVertices: ['a', 'b'],
			initEdges: [['a', 'b']],
			startVal: 'a',
			visited: ['a', 'b']
		},
		{
			initVertices: ['a', 'b', 'c'],
			initEdges: [['a', 'b'], ['b', 'c']],
			startVal: 'a',
			visited: ['a', 'b', 'c']
		},
		{
			initVertices: ['a', 'b', 'c'],
			initEdges: [['a', 'c'], ['b', 'c']],
			startVal: 'a',
			visited: ['a', 'c', 'b']
		},
		{
			initVertices: ['a', 'b', 'c', 'd'],
			initEdges: [['a', 'b'], ['b', 'c'], ['b', 'd']],
			startVal: 'a',
			visited: ['a', 'b', 'c', 'd']
		},
		{
			initVertices: ['a', 'b', 'c', 'd', 'e'],
			initEdges: [['a', 'b'], ['b', 'c'], ['b', 'd']],
			startVal: 'a',
			visited: ['a', 'b', 'c', 'd']
		},
		{
			initVertices: ['a', 'b', 'd', 'e', 'f', 'c'],
			initEdges: [
				['a', 'b'],
				['a', 'c'],
				['b', 'd'],
				['d', 'e'],
				['e', 'c'],
				['d', 'f'],
				['e', 'f'],
				['c', 'e']
			],
			startVal: 'a',
			visited: ['a', 'b', 'c', 'd', 'e', 'f'],
		},

	];

	testCases.forEach(test => {
		it(`traverses a graph iteratively via bfs`, () => {

			const graph = new Graph();

			test.initVertices.forEach(vert => {
				graph.addVertex(vert);
			});

			test.initEdges.forEach(edges => {
				graph.addEdge(edges[0], edges[1]);
			});

			const result = graph.breadthFirstSearchIterative(test.startVal);

			expect(result).toEqual(test.visited);
		});
	});
});
