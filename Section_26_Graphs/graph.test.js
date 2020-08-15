const Graph = require('./graph');

describe('addVertex', () => {
	const testCases = [
		{
			input: [],
			result: {},
		},
		{
			input: ['a'],
			result: {
				'a': []
			}
		},
		{
			input: ['a', 'q', 'zed'],
			result: {
				'a': [],
				'q': [],
				'zed': []
			}
		},
		{
			input: ['a','a' ],
			result: {
				'a': []
			}
		}
	];

	testCases.forEach(test => {
		it(`adds vertices to the graph.`, () => {
			const graph = new Graph();

			test.input.forEach(value => {
				graph.addVertex(value);
			});

			expect(graph.adjacencyList).toEqual(test.result);
		});
	});
});

describe('addEdge', () => {
	const testCases = [
		{
			init: ['Tokyo', 'Dallas', 'Aspen'],
			addedEdges: [['Tokyo', 'Dallas']],
			result: {
				'Tokyo': ['Dallas'],
				'Dallas': ['Tokyo'],
				'Aspen': []
			}
		}
	];

	testCases.forEach(test => {
		it(`adds edges to the graph.`, () => {
			const graph = new Graph();

			test.init.forEach(value => {
				graph.addVertex(value);
			});

			test.addedEdges.forEach(edgeSet => {
				graph.addEdge(edgeSet[0], edgeSet[1]);
			});
		});
	});
});

describe('removeEdge', () => {
	const testCases = [
		{
			init: ['Tokyo', 'Dallas', 'Aspen'],
			addedEdges: [['Tokyo', 'Dallas'], ['Tokyo', 'Aspen']],
			removedEdges: [['Tokyo', 'Dallas']],
			result: {
				'Tokyo': ['Aspen'],
				'Dallas': [],
				'Aspen': ['Tokyo']
			}
		}
	];

	testCases.forEach(test => {
		it(`removes edges from the graph.`, () => {
			const graph = new Graph();

			test.init.forEach(value => {
				graph.addVertex(value);
			});

			test.addedEdges.forEach(edgeSet => {
				graph.addEdge(edgeSet[0], edgeSet[1]);
			});

			test.removedEdges.forEach(edgeSet => {
				graph.removeEdge(edgeSet[0], edgeSet[1]);
			});

			expect(graph.adjacencyList).toEqual(test.result);
		});
	});
});

describe('removeVertex', () => {
	const testCases = [
		{
			init: ['Tokyo', 'Dallas', 'Aspen', 'Tampa'],
			addedEdges: [['Tokyo', 'Dallas'], ['Tokyo', 'Aspen'], ['Aspen', 'Tampa'], ['Tokyo', 'Tampa']],
			removedVertex: 'Tokyo',
			result: {
				'Dallas': [],
				'Aspen': ['Tampa'],
				'Tampa': ['Aspen']
			}
		}
	];

	testCases.forEach(test => {
		it(`removes vertices from the graph.`, () => {
			const graph = new Graph();

			test.init.forEach(value => {
				graph.addVertex(value);
			});

			test.addedEdges.forEach(edgeSet => {
				graph.addEdge(edgeSet[0], edgeSet[1]);
			});

			graph.removeVertex(test.removedVertex);

			expect(graph.adjacencyList).toEqual(test.result);
		});
	});
});

