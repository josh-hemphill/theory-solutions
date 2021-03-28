if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
// my first try was fastest, the others are derivatives of public answers
sf.firstUniqueChar = function (str1) {
    let result = -1;
    let map = new Map();
    for (const x of str1.split('')) {
        if (map.has(x)) {
            map.remove(x);
            continue;
        } else {
            map.set(x, true)
        }
    }
    return str1.indexOf(map.keys().next())
}
// 77.36% slower
sf.firstUniqueChar2 = function (str1) {
    const dict = {};
    for (let char of str1) {
        if (!dict[char]) {
            dict[char] = 1;
        } else {
            dict[char] += 1;
        }
    }
    for (let i in str1) {
        if (dict[str1[i]]===1) {
            return i;
        }
    }
    return -1;
}
// 93% slower
sf.firstUniqueChar3 = function (str1) {
    const str = str1.split('').reduce(( acc, cur, i ) => acc[cur] ? {...acc, ...{[cur]:{ct: acc[cur].ct, i}}} : {[cur]:{ct: 1, i}, ...acc});
    str1.split('').forEach((x, i) => {
        if(str[x].ct === 1) return str[x].i;
    })
    return -1;
}
