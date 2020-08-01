const naiveStringSearch = (str, word) => {
	let count = 0;
	let strManager = 0;

	for(let i = 0; i < str.length; i++){
		if(str[i] === word[strManager]){
			strManager++;
		} else {
			strManager = 0;
		}

		if(strManager === word.length){
			count++;
			strManager = 0;
		}
	}

	return count;
};

module.exports = naiveStringSearch;
