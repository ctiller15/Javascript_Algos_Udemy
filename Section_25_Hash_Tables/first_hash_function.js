let total = 0;

total += "hello".charCodeAt(0) - 96;
total += "hello".charCodeAt(1) - 96;
total += "hello".charCodeAt(2) - 96;
total += "hello".charCodeAt(3) - 96;
total += "hello".charCodeAt(4) - 96;

console.log(total);

console.log(total % 11);

function hash(key, arrayLen){
	let total = 0;
	for (let char of key) {
		// map "a" to 1, "b" to 2, "c" to 3, etc.
		let value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLen;
	}
	return total;
}

console.log(hash("pink", 10));

console.log(hash("cyan", 10));

console.log(hash("purple", 10));

console.log(hash("maroon", 10));

function revisedHash(key, arrayLen) {
	let total = 0;
	let WEIRD_PRIME = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++){
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * WEIRD_PRIME + value) % arrayLen;
	}

	return total;
}

console.log(revisedHash("hello", 13));
console.log(revisedHash("goodbye", 13));
console.log(revisedHash("hi", 13));
console.log(revisedHash("cyan", 13));
