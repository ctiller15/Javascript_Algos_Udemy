const fib = (ind) => {
	if(ind === 0 || ind === 1){
		return ind;
	} else {
		return fib(ind - 1) + fib(ind - 2);
	}
};

module.exports = fib;
