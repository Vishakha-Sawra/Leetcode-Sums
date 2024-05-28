// 54. Spiral Matrix

var spiralOrder = function (matrix) {
    let ans = [];
    let n = matrix.length; // no. of rows
    let m = matrix[0].length; // no. of columns
    let top = 0, left = 0, bottom = n - 1, right = m - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) { // top row
            ans.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom; i++) { // right column
            ans.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            for (let i = right; i >= left; i--) { // bottom row
                ans.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) { // left column
                ans.push(matrix[i][left]);
            }
            left++;
        }
    }
    return ans;
}
