function swap (arr,start,end, inclusive = 0) {
	const halfway = Math.floor((end - start)/2)
	for (let i = 0;i <= halfway;i++) {
	  const stored = arr[start + i]
	  arr[start + i] = arr[end - i - inclusive]
	  arr[end - i] = stored;
	}
  }
  function minOperations(arr) {
	// Write your code here
	let swaps = 0
	for (let done = false;!done;) {
	  let localswaps = 0;
	  for (let i = 0;i<arr.length;i++) {
		const v = arr[i];
		const vInd = v-1
		if (vInd !== i) {
		  localswaps++;
		  const [start,end] = vInd > i ? [i,vInd] : [vInd,i];
		  swap(arr,start,end);
		}
	  }
	  if (!localswaps) {
		done = true;
	  };
	  swaps += localswaps
	}
	return swaps;
  }
  
var n_1 = 5;
var arr_1 = [1, 2, 5, 4, 3];
var expected_1 = 1;
var output_1 = minOperations(arr_1);
console.log(arr_1)
console.log(expected_1)
console.log(output_1)


var n_2 = 3;
var arr_2 = [3, 1, 2];
var expected_2 = 2;
var output_2 = minOperations(arr_2);
console.log(arr_2)
console.log(expected_2)
console.log(output_2)
