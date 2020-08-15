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

	keys(){
		const foundKeys = [];

		for(let i = 0; i < this.keyMap.length; i++){
			if(this.keyMap[i]){
				for(let j = 0; j < this.keyMap[i].length; j++){
					foundKeys.push(this.keyMap[i][j][0]);
				}
			}
		}

		return foundKeys;
	}

	values(){
		const foundValues = [];

		for(let i = 0; i < this.keyMap.length; i++){
			if(this.keyMap[i]){
				for(let j = 0; j < this.keyMap[i].length; j++){
					const checkVal = this.keyMap[i][j][1];
					if(foundValues.indexOf(checkVal) === -1){
						foundValues.push(checkVal);
					}
				}
			}
		}

		return foundValues;
	}
}

module.exports = HashTable;
