const Node = require('../node/node');

class SinglyLinkedList{
	constructor(val) {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	push(val) {
		const newNode = new Node(val);

		if(this.head === null){
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
	}
}

module.exports = SinglyLinkedList;
