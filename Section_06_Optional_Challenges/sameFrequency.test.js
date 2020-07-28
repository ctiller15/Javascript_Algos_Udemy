const sameFrequency = require('./sameFrequency');

describe('sameFrequency', () => {
	const testCases = [
		{
			int1: 182,
			int2: 281,
			result: true
		},
		{
			int1: 34,
			int2: 14,
			result: false
		},
		{
			int1: 3589578,
			int2: 5879385,
			result: true
		},
		{
			int1: 22,
			int2: 222,
			result: false
		},
		{
			int1: 35895781,
			int2: 58793855,
			result: false
		},
	];

	testCases.forEach(test => {
		it(`says that ${test.int1} and ${test.int2} ${test.result ? 'are' : 'are not'} of the same frequency.`, () => {
			expect(sameFrequency(test.int1, test.int2)).toBe(test.result);		
		});
	});
});
