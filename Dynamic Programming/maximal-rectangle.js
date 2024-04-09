// Maximal Rectangle

// matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]] => Output = 6
// matrix = [
// ["1","0","1","0","0"],
// ["1","0","1","1","1"],
// ["1","1","1","1","1"],
// ["1","0","0","1","0"]
// ] => 6

var maximalRectangle = function (matrix) {
    if (matrix.length === 0) return 0;
    let m = matrix.length, n = matrix[0].length; // m = 4, n = 5
    let left = new Array(n).fill(0), right = new Array(n).fill(n), height = new Array(n).fill(0);
    // why right = [5,5,5,5,5]? => because we need to calculate the width, so we need to know the right boundary of each column
    // left = [0,0,0,0,0], right = [5,5,5,5,5], height = [0,0,0,0,0]
    let maxA = 0;
    for (let i = 0; i < m; i++) {
        let cur_left = 0, cur_right = n;
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                height[j]++;
            } else {
                height[j] = 0;
            }
        }
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                left[j] = Math.max(left[j], cur_left);
            } else {
                left[j] = 0;
                cur_left = j + 1;
            }
        }
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] === '1') {
                right[j] = Math.min(right[j], cur_right);
            } else {
                right[j] = n;
                cur_right = j;
            }
        }
        for (let j = 0; j < n; j++) {
            maxA = Math.max(maxA, (right[j] - left[j]) * height[j]);
        }
    }
    return maxA;
};

