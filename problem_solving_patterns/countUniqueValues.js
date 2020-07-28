const countUniqueValues = (arrValues) => {
	let count = Number(arrValues.length !== 0);
	let start = arrValues[0];

	for(let num of arrValues){
		if(start !== num){
			count++;
			start = num;
		}
	}

	return count;
};

module.exports = countUniqueValues;
