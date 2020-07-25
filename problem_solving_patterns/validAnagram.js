const validAnagram = (str1, str2) => {
	// loop through string 1, put into counter object.
	
	if(str1.length !== str2.length){
		return false;
	}

	const counter1 = {};

	// Loop through string 2, put into counter object.
	const counter2 = {};
	
	for (const char of str1){
		counter1[char] = ++counter1[char] || 1;
	}

	for (const char of str2){
		counter2[char] = ++counter2[char] || 1;
	}

	// Compare each character count of object.

	for (const key in counter1){
		if(!counter2.hasOwnProperty(key) || (counter2[key] !== counter1[key])){
			return false;
		}
	}

	return true;
}

module.exports = validAnagram;
