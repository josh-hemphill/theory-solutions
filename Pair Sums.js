const MAX_COUNT = Math.pow(10,9)


function numberOfWays(arr, k) {
  // Write your code here
  const noMaxArr = arr.filter(v => v < MAX_COUNT);
  const len = noMaxArr.length
  let counter = 0
  for (let i = 0; i < len; i++) {
    value = noMaxArr.shift()
    noMaxArr.forEach(v => {
      if (value + v === k) counter++;
    })
  }
  return counter;
}
var k_2 = 6;
var arr_2 = [1, 5, 3, 3, 3];
var expected_2 = 4;
var output_2 = numberOfWays(arr_2, k_2);
console.log(output_2)
