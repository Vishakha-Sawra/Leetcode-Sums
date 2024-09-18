// 221. Maximal Square

var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let max = 0;
    let dp = Array(matrix.length + 1).fill(0).map(() => Array(matrix[0].length + 1).fill(0));
    
    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 1; j <= matrix[0].length; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
} 

// time complexity: O(n^2)
// space complexity: O(n^2)

var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let max = 0;
    let dp = Array(matrix[0].length + 1).fill(0);
    let prev = 0;
    
    for (let i = 1; i <= matrix.length; i++) {
        for (let j = 1; j <= matrix[0].length; j++) {
            let temp = dp[j];
            if (matrix[i - 1][j - 1] === '1') {
                dp[j] = Math.min(dp[j], dp[j - 1], prev) + 1;
                max = Math.max(max, dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }
    return max * max;
}

// time complexity: O(n * m)
// space complexity: O(m)