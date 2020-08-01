const mergeArrays = require('../merge_arrays/mergeArrays');

const mergeSort = (arr) => {
	if(arr.length <= 1){
		return arr;
	} else {
		const midPoint = arr.length / 2;
		return mergeArrays(mergeSort(arr.slice(0, midPoint)), mergeSort(arr.slice(midPoint)));
	}
};

module.exports = mergeSort;
