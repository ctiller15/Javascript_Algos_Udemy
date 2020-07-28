const sameFrequency = (int1, int2) => {
	const str1 = String(int1);
	const str2 = String(int2);

	if(str1.length !== str2.length){
		return false;
	}

	const countObject = {};

	// First, count all values in first string.
	for(let num of str1){
		countObject[num] = countObject[num] ? countObject[num] + 1 : 1;
	}

	// Then, count all values in second string.
	for(let num of str2){
		if(!countObject[num]){
			return false;
		}

		countObject[num] -= 1;
	}

	return true;
}

module.exports = sameFrequency;
