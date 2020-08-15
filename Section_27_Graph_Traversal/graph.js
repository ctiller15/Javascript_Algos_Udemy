class Graph {
	constructor(){
		this.adjacencyList = {};
	}

	addVertex(value){
		this.adjacencyList[value] = [];
	}

	addEdge(value1, value2){
		if(Array.isArray(this.adjacencyList[value1]) 
		&& !this.adjacencyList[value1].includes(value2)){
			this.adjacencyList[value1].push(value2);
		}

		if( Array.isArray(this.adjacencyList[value2]) 
			&& !this.adjacencyList[value2].includes(value1)){
			this.adjacencyList[value2].push(value1);
		}
	}

	removeEdge(value1, value2){
		if(Array.isArray(this.adjacencyList[value1]) 
		&& this.adjacencyList[value1].includes(value2)){
			const ind = this.adjacencyList[value1].indexOf(value2);
			this.adjacencyList[value1].splice(ind, 1);
		}

		if( Array.isArray(this.adjacencyList[value2]) 
			&& this.adjacencyList[value2].includes(value1)){
			const ind = this.adjacencyList[value2].indexOf(value1);
			this.adjacencyList[value2].splice(ind, 1);
		}
		
	}

	removeVertex(value){
		if(this.adjacencyList[value]){
			delete this.adjacencyList[value];
		}

		for(let val in this.adjacencyList){
			this.adjacencyList[val] = this.adjacencyList[val].filter(f => f !== value);
		}
	}

	depthFirstSearchRecursive(start){
		const visited = {};
		const result = [];

		const traverse = (nodeVal) => {
			visited[nodeVal] = true;
			result.push(nodeVal);

			for(let i = 0; i < this.adjacencyList[nodeVal].length; i++){
				if(!visited.hasOwnProperty(this.adjacencyList[nodeVal][i]) || visited[this.adjacencyList[nodeVal][i]] === false){
					traverse(this.adjacencyList[nodeVal][i]);
				} 
			}
		}
		
		traverse(start);

		return result;
	}

	depthFirstSearchIterative(start){
		const visited = {};
		const result = [];
		const stack = [];
		stack.push(start);

		while(stack.length !== 0){
			const vertex = stack.pop();

			if(!visited[vertex]){
				result.push(vertex);
				visited[vertex] = true;

				for(let i = 0; i < this.adjacencyList[vertex].length; i++){
					stack.push(this.adjacencyList[vertex][i]);
				}
			}
		}

		return result;
	}

	breadthFirstSearchIterative(start){
		const visited = {};
		const result = [];
		const stack = [];
		stack.push(start);

		while(stack.length !== 0){
			const vertex = stack.shift();

			if(!visited[vertex]){
				result.push(vertex);
				visited[vertex] = true;

				for(let i = 0; i < this.adjacencyList[vertex].length; i++){
					stack.push(this.adjacencyList[vertex][i]);
				}
			}
		}

		return result;
	}
}

module.exports = Graph;
