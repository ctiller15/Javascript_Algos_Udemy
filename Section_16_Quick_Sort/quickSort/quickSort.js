const pivotHelper = require('../pivotHelper/pivotHelper');

const quickSort = (arr, start = 0, end = arr.length - 1) => {
	if(end - start < 1){
		return;
	} 
	else {
		const ind = pivotHelper(arr, start, end)
		quickSort(arr, start, ind - 1);
		quickSort(arr, ind + 1, end);
	}
};

module.exports = quickSort;
