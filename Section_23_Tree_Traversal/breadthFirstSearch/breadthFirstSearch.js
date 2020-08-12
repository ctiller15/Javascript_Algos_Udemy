class Node {
	constructor(value){
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root = null;
	}

	insert(value){
		var newNode = new Node(value);
		if(this.root === null){
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while(true){
				if(value === current.value){
					return undefined;
				}
				if(value < current.value){
					if(current.left === null){
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else if(value > current.value){
					if(current.right === null){
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}

	find(value){
		const check = (node) => {
			if(node === null){
				return false;
			} else if(value === node.value){
				return true;
			} else if(value < node.value){
				return check(node.left);
			} else {
				return check(node.right);
			}
		}

		if(!this.root){
			return undefined;
		} else if(this.root.value === value){
			return true;
		} else {
			return check(this.root);
		}
	}

	breadthFirstSearch(){
		const found = [];
		const queue = [];

		if(this.root !== null){
			queue.push(this.root);
			while(queue.length !== 0){
				const next = queue.shift();
				found.push(next.value);

				if(next.left !== null){
					queue.push(next.left);
				}

				if(next.right !== null){
					queue.push(next.right);
				}
			}

		}

		return found;
	}
};

module.exports = BinarySearchTree;
