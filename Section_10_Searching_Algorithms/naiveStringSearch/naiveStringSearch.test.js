const naiveStringSearch = require('./naiveStringSearch');

describe('naiveStringSearch', () => {
	const testCases = [
		{
			str: "A man a plan a canal panama!",
			word: "panama",
			count: 1
		},
		{
			str: "five four five",
			word: "five",
			count: 2,
		},
		{
			str: "csharp is a bad langauge",
			word: "good",
			count: 0,
		},
		{
			str: "fire fire flame flame fire fire torch",
			word: "fire",
			count: 4,
		}
	];

	testCases.forEach(test => {
		it(`finds ${test.word} in ${test.str}`, () => {
			expect(naiveStringSearch(test.str, test.word)).toBe(test.count);
		});
	});
});
