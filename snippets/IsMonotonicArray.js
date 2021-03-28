if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
sf.isMonotonicArray = function (arr) {
    return arr.every((el, i, arr) => el >= arr[i+1]) || arr.every((el, i, arr) => el <= arr[i+1]);
}
sf.isMonotonicArray2 = function (arr) {
    let isMono = undefined;
    return arr.every((el, i, arr) => {
        if (isMono === undefined) {
            if (el > arr[i + 1]) isMono = true;
            if (el < arr[i + 1]) isMono = false;
        } else {
            if (isMono === true) {
                return el >= arr[i+1]
            } else {
                return el <= arr[i+1]
            }
        }
        return true;
    })
}
sf.isMonotonicArray3 = function (arr) {
    let isMono = undefined;
    const desicion = {
        undefined: (el1, el2) => {
            if (el1 > el2) isMono = true;
            if (el1 < el2) isMono = false;
            return true;
        },
        true: (el1, el2) => el1 >= el2,
        false: (el1, el2) => el1 <= el2,
    }
    return arr.every((el, i, arr) => desicion[isMono](el, arr[i + 1]))
}
