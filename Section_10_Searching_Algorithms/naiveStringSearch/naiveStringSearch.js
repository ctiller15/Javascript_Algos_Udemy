const naiveStringSearch = (str, word) => {
	let count = 0;

	for(let i = 0; i < (str.length - word.length + 1); i++){
		if(str[i] = word[0]){
			for(let j = 0; j < word.length; j++){
				if(str[i + j] !== word[j]){
					break;
				} else if(j === word.length - 1){
					count++;
				}
			}
		}
	}

	return count;
};

module.exports = naiveStringSearch;
