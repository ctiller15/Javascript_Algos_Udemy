const minSubArrayLen = (arr, targetSum) => {
	let minLen = arr.length;
	let windowStart = 0;
	let windowEnd = arr.length - 1;
	let sourceSum = 0;
	let initSum = 0;
	let solved = false;

	for(let i = 0; i < arr.length; i++){
		sourceSum += arr[i];
	}

	initSum = sourceSum;

	if(sourceSum < targetSum){
		return 0;
	}

	while(!solved){
		const temp = initSum - arr[windowStart];

		if(temp >= targetSum){
			initSum = temp;
			windowStart++;
			minLen--;
		} else {
			const temp2 = initSum - arr[windowEnd];
			if(temp2 >= targetSum){
				initSum = temp;
				windowEnd--;
				minLen--;
			} else {
				solved = true;
			}
		}
	}

	// We've exhausted from ltr, now do rtl.
	initSum = sourceSum;
	solved = false;
	windowStart = 0;
	windowEnd = arr.length - 1;
	let startLen = arr.length;

	while(!solved){
		// start from the right.
		const temp = initSum - arr[windowEnd];
		if(temp >= targetSum){
			initSum = temp;
			windowEnd--;
			startLen--;
		} else {
			const temp2 = initSum - arr[windowStart];
			if(temp2 >= targetSum){
				initSum = temp;
				windowStart++;
				startLen--;
			} else {
				solved = true;
			}
		}
	}

	// And now we should try both sides simultaneously!
	initSum = sourceSum;
	solved = false;
	windowStart = 0;
	windowEnd = arr.length - 1;
	let switchLen = arr.length;

	while(!solved){
		let leftBlocked = false;
		let rightBlocked = false;
		// hit the right, then the left.
		const temp = initSum - arr[windowStart];
		if(temp >= targetSum){
			initSum = temp;
			windowStart++;
			switchLen--;
		} else {
			leftBlocked = true;
		}

		const temp2 = initSum - arr[windowEnd];
		if(temp2 >= targetSum){
			initSum = temp2;
			windowEnd--;
			switchLen--;
		} else {
			rightBlocked = true;
		}

		solved = leftBlocked && rightBlocked;
	}
	return Math.min(startLen, minLen, switchLen);
};

module.exports = minSubArrayLen;
