const productOfArray = (arr) => {
	if(arr.length === 0){
		return 1;
	} else {
		return(arr[0] * productOfArray(arr.slice(1)));
	}
};

module.exports = productOfArray;
