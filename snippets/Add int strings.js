if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
sf.addIntStrings = function (num1, num2) {
    let type1 = typeof num1; type1 = type1.split(''); type1[0] = type1[0].toUpperCase(); type1 = type1.join('');

    return window[type1](parseInt(num1) + parseInt(num2))
}

sf.addLargeStringInts = function (num1, num2) {
    const toNumeric = (str) => str.charCodeAt(0) > 57 || str.charCodeAt(0) < 48 ? 0 : str.charCodeAt(0) - 48;
    let chars1 = num1.split('').map(x => toNumeric(x));
    let chars2 = num2.split('').map(x => toNumeric(x));
    let len = num1.length < num2.length ? num1.length : num2.length;
    const sum = [];
    for (let i = 0; i < len; i++) {
        const num1 = chars1.pop(), num2 = chars2.pop();
        sum.unshift(num1 + num2);
    }
    return [...chars1, ...chars2, ...sum].join('');
}