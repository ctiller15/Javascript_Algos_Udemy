const pivotHelper = (arr, start, end) => {
	let pivot = start;
	const pivotValue = arr[start];

	for(let i = start; i <= end; i++){
		if(arr[i] < pivotValue){
			pivot++;
			const temp = arr[pivot];
			arr[pivot] = arr[i];
			arr[i] = temp;
		}
	}

	arr[start] = arr[pivot];
	arr[pivot] = pivotValue;
	return pivot;
}

module.exports = pivotHelper;
