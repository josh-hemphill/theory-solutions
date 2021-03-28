class Arr extends Array {
	get len () {
		return this.length - 1;
	}
}
const pairs = {
	'(': ')', 
	'{': '}', 
	'[': ']'
}

function isBalanced(s) {
	// Write your code here
	const p = s.split('')
	const stack = new Arr()
	for (const bracket of p) {
		if (Object.keys(pairs).includes(bracket)) {
			stack.push(bracket);
		} else {
			const top = stack[stack.len]
			if (pairs[top] === bracket) {
				stack.pop()
			} else {
				return false;
			}
		}
	}
	return !stack.length;
}

var s_1 = "{[(])}";
var expected_1 = false;
var output_1 = isBalanced(s_1);
console.log(s_1)
console.log(expected_1)
console.log(output_1)

var s_2 = "{{[[(())]]}}";
var expected_2 = true;
var output_2 = isBalanced(s_2);
console.log(s_2)
console.log(expected_2)
console.log(output_2)
