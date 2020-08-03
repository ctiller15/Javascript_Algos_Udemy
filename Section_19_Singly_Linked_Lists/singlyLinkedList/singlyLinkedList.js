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

	pop() {
		let currentNode = this.head;

		if(this.head === null){
			return undefined;
		} else if(this.head.next === null) {
			this.tail = null;
			this.head = null;
		} else {
			// walk the nodes.
			let lastNode;
			while(currentNode.next !== null){
				lastNode = currentNode;
				currentNode = currentNode.next;
			}

			lastNode.next = null;
			this.tail = lastNode;
		}

		this.length--;

		return currentNode.val;
	}

	shift() {
		let headNode = this.head;

		if(headNode === null){
			return undefined;
		} else if (headNode.next === null) {
			this.tail = null;
		} else {
			this.head = headNode.next;
		}

		this.length--;
		return headNode.val;
	}

	unshift(val) {
		const newNode = new Node(val);

		if(this.head === null){
			this.tail = newNode;
		} else {
			newNode.next = this.head;
		}

		this.head = newNode;
		this.length++;
		
		return this;
	}

	get(pos) {
		if(pos < 0 || pos > this.length){
			return null;
		} else {
			let currentNode = this.head;
			for(let i = 0; i < pos; i++){
				currentNode = currentNode.next;
			}

			return currentNode;
		}
	}

	set(pos, val){
		const node = this.get(pos);
		if(node){
			node.val = val;
		}

	}

	insert(ind, val){
		if(ind < 0 || ind > this.length){
			return false;
		} else if (ind === 0){
			this.unshift(val);
			return true;
		} else if (ind === this.length) {
			this.push(val);
			return true;
		} else {
			const newNode = new Node(val);
			const node = this.get(ind - 1);

			if(node){
				newNode.next = node.next;
				node.next = newNode;
				this.length++;
				return true;
			}
		}

		return false;
	}

	remove(ind){
		if(ind < 0 || ind >= this.length){
			return undefined;
		} else if (ind === 0){
			return this.shift();
		}
		else if (ind === this.length - 1){
			return this.pop();
		} else {
			const parentNode = this.get(ind - 1);
			const removed = parentNode.next;
			parentNode.next = parentNode.next.next;
			this.length--;
			return removed.val;
		}
	}

	reverse(){
		const oldHead = this.head;
		this.head = this.tail;
		this.tail = oldHead;

		let prevNode = null;
		let nextNode = this.tail;
		for(let i = 0; i < this.length; i++){
			const future = nextNode.next;
			nextNode.next = prevNode;
			prevNode = nextNode;
			nextNode = future;
		}
	}
}

module.exports = SinglyLinkedList;
