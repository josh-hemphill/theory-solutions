function countContiguous(v,i,arr, step = 1, prev = 0) {
	if (arr[i+step] && v > arr[i+step]) return countContiguous(v,i+step,arr,step,prev+1);
	return prev
}

function countSubarrays(arr) {
	// Write your code here
	return arr.map((v,i) => {
		let count = 1;
		const count2 = countContiguous(v,i,arr,1)
		const count3 = countContiguous(v,i,arr,-1)
		if (i === 3) debugger;
		return count + count2 + count3;
	})
}

var test_1 = [3, 4, 1, 6, 2];
var expected_1 = [1, 3, 1, 5, 1];
var output_1 = countSubarrays(test_1);
console.log(test_1)
console.log(expected_1)
console.log(output_1)
debugger;
var test_2 = [2, 4, 7, 1, 5, 3];
var expected_2 = [1, 2, 6, 1, 3, 1];
var output_2 = countSubarrays(test_2);
console.log(test_2)
console.log(expected_2)
console.log(output_2)
debugger;
