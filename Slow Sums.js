function getTotalTime(arr) {
	// Write your code here
	const len = arr.length;
	let sizeSorted = arr.sort((a, b) => b - a);
	let total = 0
	for (let i = 0; i < len - 1; i++) {
		const largest = sizeSorted.shift();
		const secondLargest = sizeSorted.shift()
		const cost = largest + secondLargest;
		sizeSorted.unshift(cost)
		total += cost;	
	}
	return total
}

var arr_1 = [4, 2, 1, 3];
var expected_1 = 26;
var output_1 = getTotalTime(arr_1);
console.log(arr_1)
console.log(expected_1)
console.log(output_1)

var arr_2 = [2, 3, 9, 8, 4];
var expected_2 = 88;
var output_2 = getTotalTime(arr_2);
console.log(arr_2)
console.log(expected_2)
console.log(output_2)
