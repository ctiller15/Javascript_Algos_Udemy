const validAnagram = require('./validAnagram');

describe('anagrams', () => {
	const testCases = [
		{
			str1: '',
			str2: '',
			result: true
		},
		{
			str1: 'aaz',
			str2: 'zza',
			result: false
		},
		{
			str1: 'anagram',
			str2: 'nagaram',
			result: true
		},
		{
			str1: 'rat',
			str2: 'car',
			result: false
		},
		{
			str1: 'awesome',
			str2: 'awesom',
			result: false
		},
		{
			str1: 'amanaplanacanalpanama',
			str2: 'acanalmanplanpanama',
			result: false
		},
		{
			str1: 'qwerty',
			str2: 'qeywrt',
			result: true
		},
		{
			str1: 'texttwisttime',
			str2: 'timetwisttext',
			result: true
		},
	];

	testCases.forEach(test => {
		it(`should find out that ${test.str1} and ${test.str2} ${test.result ? 'are' : 'are not'} anagrams`, () => {
			expect(validAnagram(test.str1, test.str2)).toBe(test.result);
		});
	});
});
