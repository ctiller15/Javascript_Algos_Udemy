const mergeArrays = (arr1, arr2) => {
	let arr1Pointer = 0;
	let arr2Pointer = 0;
	const newArr = [];
	
	for(let i = 0; i < arr1.length + arr2.length; i++){
		// walk the arrays.
		if((arr1Pointer >= arr1.length && arr2Pointer < arr2.length)
			|| arr1[arr1Pointer] >= arr2[arr2Pointer]){
			newArr.push(arr2[arr2Pointer]);
			arr2Pointer++;
		}		
		else if((arr2Pointer >= arr2.length && arr1Pointer <= arr1.length) 
			|| arr2[arr2Pointer] > arr1[arr1Pointer]) {
			newArr.push(arr1[arr1Pointer]);
			arr1Pointer++;
		}
	}

	return newArr;
};

module.exports = mergeArrays;
