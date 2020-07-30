const binarySearch = (arr, val) => {
	let leftPointer = 0;
	let rightPointer = arr.length - 1;

	while((rightPointer - leftPointer) > 1){
		const center = Math.floor((rightPointer + leftPointer)/2);

		if(arr[center] === val){
			return center;
		} else if (arr[center] > val){
			rightPointer = center;
		} else {
			leftPointer = center;
		}
	}

	if(arr[leftPointer] === val){
		return leftPointer;
	} else if(arr[rightPointer] === val){
		return rightPointer;
	} else {
		return -1;
	}
};

module.exports = binarySearch;
