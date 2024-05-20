// 240. Search a 2D Matrix II

function searchElement(matrix, target) {
    let n = matrix.length; // 5
    let m = matrix[0].length; // 5
    let row = 0;
    let col = m - 1; // 4

    while (row < n && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) row++;
        else col--;
    }
    return false;
}

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];

const result = searchElement(matrix, 8);
console.log(result ? "true" : "false");

