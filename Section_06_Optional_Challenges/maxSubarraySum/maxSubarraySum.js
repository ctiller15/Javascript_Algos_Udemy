const maxSubarraySum = (arr, len) => {
	if(len > arr.length){
		return null;
	}

	let maxWindowSum = 0;
	let basePointerSum = 0;

	// initialize the first sum.
	for(let i = 0; i < len; i++){
		maxWindowSum += arr[i];
	}

	basePointerSum = maxWindowSum;

	// finally calculate all other sums.
	for(let i = 1; i <= arr.length - len; i++){
		basePointerSum = basePointerSum - arr[i-1] + arr[i + len - 1];

		if(basePointerSum > maxWindowSum){
			maxWindowSum = basePointerSum;
		}
	}
	return maxWindowSum;
};

module.exports = maxSubarraySum;
