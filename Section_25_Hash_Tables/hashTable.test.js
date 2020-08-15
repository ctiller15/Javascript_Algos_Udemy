const HashTable = require('./hashTable');

describe('set', () => {
	const testCases = [
		{
			values: [["darkBlue", "darkBlue"]],
			result: [,,[['darkBlue', 'darkBlue']],,,],
		},
		{
			values: [["darkBlue", "darkBlue"],["pink", "pink"]],
			result: [[['pink', 'pink']],,[['darkBlue', 'darkBlue']],,,],
		},
		{
			values: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"]
		],
			result: [
				[['pink', 'pink']],
				,
				[['darkBlue', 'darkBlue']],
				[['cyan', 'cyan']],
				,
			],
		},
		{
			values: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"]
		],
			result: [
				[['pink', 'pink']],
				,
				[['darkBlue', 'darkBlue'], ['red', 'red']],
				[['cyan', 'cyan']],
				,
			],
		},
	];

	testCases.forEach(test => {
		it(`sets the values ${test.values}`, () => {
			const table = new HashTable(5);

			test.values.forEach(val => {
				table.set(val[0], val[1]);
			});

			expect(table.keyMap).toEqual(test.result);
		});
	});
});

describe('get', () => {
	const testCases = [
		{
			init: [
				["darkBlue", "darkBlue"]
			],
			search: 'darkBlue',
			result: ['darkBlue', 'darkBlue'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"]],
			search: 'pink',
			result: ['pink', 'pink'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"]
			],
			search: 'cyan',
			result: ['cyan', 'cyan'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"]
			],
			search: 'red',
			result: ['red', 'red']
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"]
			],
			search: 'maroon',
			result: undefined
		},
	];

	testCases.forEach(test => {
		it(`finds the value ${test.search}`, () => {
			const table = new HashTable(5);

			test.init.forEach(val => {
				table.set(val[0], val[1]);
			});

			result = table.get(test.search);

			expect(result).toEqual(test.result);
		});
	});
});

describe('keys', () => {
	const testCases = [
		{
			init: [
				["darkBlue", "darkBlue"]
			],
			result: ['darkBlue'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"]],
			result: ['darkBlue', 'pink'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"]
			],
			result: ['darkBlue', 'pink', 'cyan'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"]
			],
			result: ['darkBlue', 'pink', 'cyan', 'red']
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"],
				["duplicate_key", "red"]
			],
			result: ['darkBlue', 'pink', 'cyan', 'red', 'duplicate_key']
		},
	];

	testCases.forEach(test => {
		it(`finds the value ${test.search}`, () => {
			const table = new HashTable(5);

			test.init.forEach(val => {
				table.set(val[0], val[1]);
			});

			result = table.keys();

			expect(result.every(v => test.result.includes(v))).toBe(true);
			expect(result.length).toBe(test.result.length);
		});
	});
});

describe('values', () => {
	const testCases = [
		{
			init: [
				["darkBlue", "darkBlue"]
			],
			result: ['darkBlue'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"]],
			result: ['darkBlue', 'pink'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"]
			],
			result: ['darkBlue', 'pink', 'cyan'],
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"]
			],
			result: ['darkBlue', 'pink', 'cyan', 'red']
		},
		{
			init: [
				["darkBlue", "darkBlue"],
				["pink", "pink"],
				["cyan", "cyan"],
				["red", "red"],
				["duplicate_key", "red"]
			],
			result: ['darkBlue', 'pink', 'cyan', 'red']
		},
	];

	testCases.forEach(test => {
		it(`finds the values for [${test.init}]`, () => {
			const table = new HashTable(5);

			test.init.forEach(val => {
				table.set(val[0], val[1]);
			});

			result = table.values();

			expect(result.every(v => test.result.includes(v))).toBe(true);
			expect(result.length).toBe(test.result.length);
		});
	});
});
