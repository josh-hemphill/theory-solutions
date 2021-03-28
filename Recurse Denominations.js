function recurse (tar, dens) {
	if (dens.length === 0) return false;
	for (let i = 0; i < dens.length;i++) {
	  const den = dens[i]
	  if (den > tar) continue;
	  const remainder = tar % den;
	  if (remainder === 0) return true;
	  if (recurse(remainder, dens.slice(i+1))) return true;
	}
	return false;
  }
  
  function canGetExactChange(targetMoney, denominations) {
	// Write your code here
	const sortedDen = denominations.sort((a,b) => b-a)
	return recurse(targetMoney,sortedDen)
  }

var target_1 = 94;
var arr_1 = [5, 10, 25, 100, 200];
var expected_1 = false;
var output_1 = canGetExactChange(target_1, arr_1);
console.log(expected_1)
console.log(output_1)

var target_2 = 75;
var arr_2 = [4, 17, 29];
var expected_2 = true;
var output_2 = canGetExactChange(target_2, arr_2);
console.log(expected_2)
console.log(output_2)
