if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
sf.countWords = function (str) {
    const words = new Map();
    for (const x of str.split(/[ \n\r\t\f]+|[^A-Za-z]+/)) {
        if(!x) continue;
        const k = x.toLowerCase()
        let count = 1;
        if (words.has(k)) count += words.get(k);
        words.set(k, count);
    };
    return words;
}
sf.averageWords = function (str) {
    const words = sf.countWords(str);
    let sum = 0;
    for (const [key, value] of words) {
        sum += value;
    }
    return sum / words.size;
}