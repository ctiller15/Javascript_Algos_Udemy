const findLongestSubstring = require('./findLongestSubstring');

describe('findLongestSubstring', () => {
	const testCases = [
		{
			str: '',
			longest: 0
		},
		{
			str: 'rithmschool',
			longest: 7
		},
		{
			str: 'thisisawesome',
			longest: 6
		},
		{
			str: 'thecatinthehat',
			longest: 7
		},
		{
			str: 'bbbbbb',
			longest: 1
		},
		{
			str: 'longestsubstring',
			longest: 8
		},
		{
			str: 'thisishowwedoit',
			longest: 6
		},
	];

	testCases.forEach(test => {
		it(`finds that the longest substring for ${test.str} is ${test.longest}`, () => {
			expect(findLongestSubstring(test.str)).toBe(test.longest);
		});
	});
});
