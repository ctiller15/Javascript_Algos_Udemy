const averagePair = (intList, avgResult) => {
	if(intList.length < 2){
		return false;
	}

	let startInd = 0;
	let endInd = intList.length - 1;

	while(startInd !== endInd){
		const avg = (intList[startInd] + intList[endInd])/2;

		if(avg === avgResult){
			return true;
		} else if (avg > avgResult){
			endInd--;
		} else{
			startInd++;
		}
	}

	return false;
};

module.exports = averagePair;
