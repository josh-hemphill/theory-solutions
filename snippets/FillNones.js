if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
// my first was fastest again
sf.fillNoneWPrev = function (arr) {
    return arr.map((v, i, arr) => v===null ? arr[i-1]||0 : v)
}
// 22.01% slower https://jsbench.me/xfkegx886u/1
sf.fillNoneWPrev2 = function (arr) {
    let valid = 0;
    const res = [];
    for (const x of arr) {
        if (x !== null) {
            res.push(x)
            valid = x;
        } else {
            res.push(valid)
        }
    }
    return res;
}
