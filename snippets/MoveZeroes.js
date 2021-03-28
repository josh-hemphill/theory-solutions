if (!window.snipFunctions) {
    window.snipFunctions = {};
}
sf = window.snipFunctions;
sf.moveZeroes = function (arr) {
    const myArr = arr;
    let len = arr.length-1;
    for (let i = 0; i < len; i++) {
        if(myArr[i] === 0) {
            myArr.push(myArr.splice(i,1)[0]);
            i--;
            len--;
        }
    }
    return myArr;
}