class HashTable {
	constructor(size=53){
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++){
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value){
		const hash = this._hash(key);
		if(!this.keyMap[hash]){
			this.keyMap[hash] = [[key, value]];
		} else {
			this.keyMap[hash].push([key, value]);
		}

	}

	get(key){
		const hash = this._hash(key);

		if(this.keyMap[hash]){
			for(let i = 0; i < this.keyMap[hash].length; i++){
				if(this.keyMap[hash][i][0] === key){
					return this.keyMap[hash][i];
				}
			}
		}

		return undefined;
	}
}

module.exports = HashTable;
