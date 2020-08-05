const Node = require('../node/node');

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val){
		const newNode = new Node(val);

		if(this.length === 0){
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		} 

		this.tail = newNode;
		this.length++;

		return this;
	}

	pop(){
		const stored = this.tail;
		if(this.length === 0){
			return undefined;
		} else if (this.length === 1){
			this.head = null; 
			this.tail = null;
		} else {
			const newTail = this.tail.prev;
			newTail.next = null;

			this.tail.prev = null;
			
			this.tail = newTail;
		}

		this.length--;
		return stored;
	}
}

module.exports = DoublyLinkedList;
