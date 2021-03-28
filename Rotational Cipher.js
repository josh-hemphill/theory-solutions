const charMap = {
	numbers:[48,57],
	upper: [65,90],
	lower: [97,122]
  }
  const between = (v,start,end) => v <= end && v >= start;
  const rotate = (v, n, start, end) => {
	const magOffset = n % Math.abs(start - end - 1)
	let newNum = v + magOffset;
	if (newNum > end) newNum = start + (newNum - end) - 1
	return newNum
  }
  
  function rotationalCipher(input, rotationFactor) {
	// Write your code here
	const strArr = input.split('').map(v => {
		const value = v.charCodeAt(0)
		for (const type in charMap) {
			const params = charMap[type];
			if (between(value,...params)) {
				return String.fromCharCode(rotate(value,rotationFactor,...params))
			}
		}
		return v;
	});
	return strArr.join('')
  }
/*   var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
console.log(input_1)
console.log(expected_1)
console.log(output_1) */

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
console.log(input_2)
console.log(expected_2)
console.log(output_2)
