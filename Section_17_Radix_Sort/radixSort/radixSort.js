const mostDigits = require('../mostDigits/mostDigits');
const getDigit = require('../getDigit/getDigit');

const radixSort = (arr) => {
	const maxCount = mostDigits(arr);

	let buckets = [...arr];

	// runs once for every digit. Digit count < number of items.
	for(let i = 0; i < maxCount; i++){

		// Bucket creation runs in constant time.
		const tempBuckets = [];
		for(let n = 0; n < 10; n++){
			tempBuckets.push([]);
		}

		// This runs in O(n) time
		for(let j = 0; j < buckets.length; j++){
			const bucket = getDigit(buckets[j], i)
			tempBuckets[bucket].push(buckets[j]);
		}

		// m goes up to the length of the buckets, so it is in constant time.
		// o runs up to the length of each invididual bucket, so less.
		// In total, O(n)
		const replaceBucket = [];
		for(let m = 0; m < tempBuckets.length; m++){
			for(let o = 0; o < tempBuckets[m].length; o++){
				replaceBucket.push(tempBuckets[m][o]);
			}
		}

		buckets = replaceBucket;

		// Inner loop runs roughly in O(n) time. Outer loop is bounded by m, where m is the maximum number of digits. 
		// If you use a prohibitively large number then it will have to run for that many iterations.
		// End result is O(m x n);
	}

	return buckets;
}

module.exports = radixSort;
