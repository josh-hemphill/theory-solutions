if (!window.snipFunctions)
    window.snipFunctions = {};
sf = window.snipFunctions;
// First is 9.82% slower than second, but will perfrom better for lots of deletion/indexing
// and guarantees persistent uniqueness https://jsbench.me/qokehvn16l/1
sf.rangeArrTo = function(n) {
    let nums = new Set();
    for (let i = 0; i<len;) {
    	if (i % 2 !== 0) {
    		nums.add(i);
    		i++
    	}
    	i++
    }
    return nums;
}
sf.rangeArrTo2 = function(n) {
    const arr = Array(len);
    arr.fill(0).map((v, i) => i %2 === 0 ? (i * 1) : false);
    return arr;
}
sf.rangeArrTo3 = function(n) {
    const arr = Array(len);
    arr.fill(0).map((v, i) => 0 + (i * 1));
    arr.map(x => x % 2 === 0 ? false : true);
    return arr;
}
