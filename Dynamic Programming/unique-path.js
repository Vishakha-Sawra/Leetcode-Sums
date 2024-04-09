// Unique Paths

var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0)); // create a 2d array with m rows and n columns and fill it with 0 
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1; // fill the first column with 1 - but we already have 0 there isnt it? => yes, but we are filling the first column with 1 because we can only move down or right, so there is only 1 way to reach the first column from the top row 
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1; // fill the first row with 1 - but we already have 0 there isnt it? => yes, but we are filling the first row with 1 because we can only move down or right, so there is only 1 way to reach the first row from the leftmost column
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        } // dp[1][1] = dp[0][1] + dp[1][0] => dp[1][1] = 1 + 1 = 2
        // i is row and j is column
        //dp[i - 1] => row above
        // dp[i][j - 1] => column before 
    }
    return dp[m - 1][n - 1];
    // return the last element of the matrix 
}

// time complexity: O(m*n)
// space complexity: O(m*n)


// SOLVE

var uniquePaths = function (m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        dp[j][0] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
}