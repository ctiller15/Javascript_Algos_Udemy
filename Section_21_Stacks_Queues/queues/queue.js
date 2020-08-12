
class Node {
	constructor(value){
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(value) {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(value){
		var newNode = new Node(value);
		if(this.size === 0){
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
			this.size++;
		}

		return this.size;
	}

	dequeue(value){
		if(!this.first){
			return null;
		}

		const temp = this.first;
		if(this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
