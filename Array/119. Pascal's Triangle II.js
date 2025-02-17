// 119. Pascal's Triangle II

var getRow = function (rowIndex) {
    let result = new Array(rowIndex + 1).fill(1);
    for (let i = 2; i <= rowIndex; i++) {
        for(let j = i - 1; j > 0; j--) {
            result[j] = result[j] + result[j - 1];
        }
    }
    return result;
}