const getDigit = (num, digit) => {
	return Math.floor(Math.abs(num / (10 ** digit)))%10;
}

module.exports = getDigit;
