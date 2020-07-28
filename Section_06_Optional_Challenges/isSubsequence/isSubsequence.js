const isSubsequence = (subsequence, fullSequence) => {
	let startPointer = 0;
	let searchPointer = 0;
	let subPointer = 0;

	while(startPointer !== fullSequence.length){
		
		if(subPointer === subsequence.length){
			return true;
		}
		if((fullSequence[startPointer] !== subsequence[0]) 
			|| searchPointer === fullSequence.length - 1){
			startPointer++;
		}
		if(fullSequence[searchPointer] === subsequence[subPointer]){
			subPointer++;
		}
		searchPointer++;
	}
	return false;
};

module.exports = isSubsequence;
