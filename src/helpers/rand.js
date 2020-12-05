function randomNumber(range) {
	return Math.floor(Math.random() * range);
}

function randomElArray(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

export {randomNumber, randomElArray};
