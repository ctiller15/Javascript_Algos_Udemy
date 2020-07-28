const areThereDuplicates = (...args) => {
	const counter = {};

	if(args.length === 0){
		return false;
	}

	for(let arg of args){
		if(counter[arg] === 1){
			return true;
		} else {
			counter[arg] = 1;
		}
	}

	return false;
};

module.exports = areThereDuplicates;
