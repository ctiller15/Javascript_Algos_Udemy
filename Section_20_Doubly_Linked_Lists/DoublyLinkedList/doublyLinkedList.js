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
			this.tail = stored.prev;
			this.tail.next = null;

			stored.prev = null;
		}

		this.length--;
		return stored;
	}

	shift(){
		const storedHead = this.head;
		if(this.length === 0){
			return undefined;
		} else if(this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			storedHead.next.prev = null;
			this.head = storedHead.next;
			storedHead.next = null;
		}

		this.length--;
		return storedHead;
	}

	unshift(val){
		const newNode = new Node(val);
		if(this.length === 0){
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(ind){
		if(ind < 0 || ind > this.length - 1){
			return null;
		} else {
			if(ind <= this.length / 2){
				let next = this.head;
				// walk forwards
				for(let i = 0; i < ind; i++){
					next = next.next;
				}

				return next;
			} 
			else {
				let prev = this.tail;
				// walk backwards
				for(let i = this.length - 1; i > ind; i--){
					prev = prev.prev;
				}

				return prev;
			}
		}
	}

	set(ind, val){
		const ref = this.get(ind);
		if(ref){
			ref.val = val;
			return true;
		} else {
			return false;
		}
	}
	
	insert(ind, val){
		if(ind < 0 || ind > this.length){
			return false;
		} else if (ind === 0){
			this.unshift(val);
		} else if (ind === this.length){
			this.push(val);
		} else {
			const newNode = new Node(val);
			const prevNode = this.get(ind - 1);
			newNode.next = prevNode.next;
			prevNode.next.prev = newNode;
			newNode.prev = prevNode;
			prevNode.next = newNode;
		}

		this.length++;
		return true;
	}

	remove(ind){
		if(ind < 0 || ind >= this.length){
			return undefined;
		} else if(ind === 0){
			return this.shift();
		} else if(ind === this.length - 1){
			return this.pop();
		} else {
			const removedNode = this.get(ind);
			removedNode.prev.next = removedNode.next;
			removedNode.next.prev = removedNode.prev;
			removedNode.prev = null;
			removedNode.next = null;
			this.length--;
			return removedNode;
		}
	}
}

module.exports = DoublyLinkedList;
