const digitCount = require('../digitCount/digitCount');

const mostDigits = (arr) => {
	let max = 0;
	for(const num of arr){
		if(digitCount(num) > max){
			max = digitCount(num);
		}
	}

	return max;
};

module.exports = mostDigits;
