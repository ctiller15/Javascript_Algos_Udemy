class Node {
	constructor(val, priority){
		this.val = val;
		this.priority = priority;
	}
}

class PriorityQueue{
	constructor(){
		this.values = [];
	}

	enqueue(val, priority){
		const node = new Node(val, priority);
		this.values.push(node);
		let index = this.values.length - 1;
		let parentIndex = Math.floor((index - 1)/2);

		while(index !== 0 && (this.values[index].priority < this.values[parentIndex].priority)){
			const temp = this.values[index];
			this.values[index] = this.values[parentIndex];
			this.values[parentIndex] = temp;
			index = parentIndex;
			parentIndex = Math.floor((index - 1)/2);
		}
	}

	dequeue(){
		// swap values.
		const returned = this.values[0];
		this.values[0] = this.values.pop();

		//console.log(this.values);

		// sink down.
		let curInd = 0;
		let left = 2 * (curInd) + 1;
		let right = 2 * (curInd) + 2;

		while((this.values[left] && this.values[left].priority < this.values[curInd].priority) 
			|| (this.values[right] && this.values[right].priority < this.values[curInd].priority)){
		if(this.values[left] && this.values[right]){
			if(this.values[left].priority < this.values[right].priority){
				if(this.values[left].priority < this.values[curInd].priority){
					const temp = this.values[left];
					this.values[left] = this.values[curInd];
					this.values[curInd] = temp;
					curInd = left;
				}
			} else if(this.values[right].priority < this.values[curInd].priority){
					const temp = this.values[right];
					this.values[right] = this.values[curInd];
					this.values[curInd] = temp;
					curInd = right;
				}
		} else if(this.values[left] && (this.values[left].priority < this.values[curInd].priority)){
			const temp = this.values[left];
			this.values[left] = this.values[curInd];
			this.values[curInd] = temp;
			curInd = left;
		} else if(this.values[right] && (this.values[right].priority < this.values[curInd].priority)){
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

module.exports = PriorityQueue;
