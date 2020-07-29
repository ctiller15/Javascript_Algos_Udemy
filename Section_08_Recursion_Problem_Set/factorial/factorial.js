const factorial = (num) => {
	return num <= 1 ? 1 : num * factorial(--num);
};

module.exports = factorial;
