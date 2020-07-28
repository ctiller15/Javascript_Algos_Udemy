const findLongestSubstring = (str) => {
	if(str.length < 1){
		return 0;
	}

	let longest = 1;
	let currentLongest = 1;
	let windowStart = 0;
	let windowEnd = 1;
	let countObj = {};

	countObj[str[0]] = 1;

	while(windowEnd < str.length){
		if(countObj[str[windowEnd]] >= 1){
			countObj[str[windowStart]]--;
			windowStart++;
			currentLongest--;
		} else {
			countObj[str[windowEnd]] = ++countObj[str[windowEnd]] || 1;
			windowEnd++;
			currentLongest++;

			if(currentLongest > longest){
				longest = currentLongest;
			}
		}

	}

	return longest;
};

module.exports = findLongestSubstring;
