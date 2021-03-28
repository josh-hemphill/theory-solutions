if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
// fisrt was 17.17% slower https://jsbench.me/4xkeht29g7/1
sf.reverseInt = function (str) {
    let type = typeof str; type = type.split(''); type[0] = type[0].toUpperCase(); type = type.join('');
    let inStr = String(str).split('')
    let pole = '';
    if (inStr[0] === '-') pole = inStr.shift();
    for (let i = 0; i < Math.floor(inStr.length / 2); i++) {
        [inStr[i], inStr[inStr.length - i - 1]] = [inStr[inStr.length - i - 1], inStr[i]];
    }
    return window[type](pole + inStr.join(''));
}
sf.reverseInt2 = function (str) {
    let type = typeof str; type = type.split(''); type[0] = type[0].toUpperCase(); type = type.join('');
    let inStr = String(str).split('')
    let pole = '';
    if (inStr[0] === '-') pole = inStr.shift();
    return window[type](pole + inStr.reverse().join(''));
}

