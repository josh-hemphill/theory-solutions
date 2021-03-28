if (!window.snipFunctions)
    window.snipFunctions = {};
sf = window.snipFunctions;
sf.matchedMis = function(str1, str2) {
    let shared = new Set();
    let s1 = new Set(str1.toLowerCase().split(/[^a-z]+/))
    let s2 = new Set(str2.toLowerCase().split(/[^a-z]+/))
    for (let elem of s1) {
        if (s2.has(elem)) {
            shared.add(elem)
            s2.delete(elem);
        } else {
            s2.add(elem);
        }
    }
    return [[...s2],[...shared]];
}
