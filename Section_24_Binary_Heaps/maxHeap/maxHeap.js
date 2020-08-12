class MaxHeap{
	constructor(){
		this.values = [];
	}

	insert(val){
		this.values.push(val);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1)/2);

		while(index !== 0 && (this.values[index] > this.values[parentIndex])){
			const temp = this.values[index];
			this.values[index] = this.values[parentIndex];
			this.values[parentIndex] = temp;
			index = parentIndex;
			parentIndex = Math.floor((index - 1)/2);
		}
	}

	extractMax(){
		// swap values.
		const returned = this.values[0];
		this.values[0] = this.values.pop();

		console.log(this.values);

		// sink down.
		let curInd = 0;
		let left = 2 * (curInd) + 1;
		let right = 2 * (curInd) + 2;

		while(this.values[left] > this.values[curInd] || this.values[right] > this.values[curInd]){
		if(this.values[left] && this.values[right]){
			if(this.values[left] > this.values[right]){
				if(this.values[left] > this.values[curInd]){
					const temp = this.values[left];
					this.values[left] = this.values[curInd];
					this.values[curInd] = temp;
					curInd = left;
				}
			} else if(this.values[right] > this.values[curInd]){
					const temp = this.values[right];
					this.values[right] = this.values[curInd];
					this.values[curInd] = temp;
					curInd = right;
				}
		} else if(this.values[left] && (this.values[left] > this.values[curInd])){
			const temp = this.values[left];
			this.values[left] = this.values[curInd];
			this.values[curInd] = temp;
			curInd = left;
		} else if(this.values[right] && (this.values[right] > this.values[curInd])){
			const temp = this.values[right];
			this.values[right] = this.values[curInd];
			this.values[curInd] = temp;
			curInd = right;
		}
				left = 2 * curInd + 1;
				right = 2 * curInd + 2;
		}
		return returned;
	}
}

module.exports = MaxHeap;
