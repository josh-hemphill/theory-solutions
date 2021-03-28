if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
sf.validPalindrome = function (str) {
    let isTrue = false;
    const last = str.length -1;
    str.split('').forEach((x,i,arr) => {
        const str1 = [...arr.splice(i ? 0 : last+1, i-1),...arr.splice(i===last ? -last + i : last + 1)];
        if(str1.join('') === str1.reverse().join()) isTrue = true;
    })
    return isTrue;
}
sf.validPalindrome2 = function (str) {
    let isTrue = false;
    function reverse(inStr, ignore) {
        const newStr = [];
        for (let i = 0; i < Math.floor(inStr.length / 2); i++) {
            let b = i === ignore ? -1 : i;
            let e = (inStr.length - i - 1) === ignore ? -1 : inStr.length - i - 1;
            [newStr[i], newStr[inStr.length - i - 1]] = [inStr[e], inStr[b]];
        }
        return newStr.join('');
    }
    str.split('').forEach((x,i,arr) => {
        const str1 = arr.reduce((acc, v, i2) => i2 === i ? acc : acc + v, '');
        if(str1 === reverse(arr, i)) isTrue = true;
    })
    return isTrue;
}