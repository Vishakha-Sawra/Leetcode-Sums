// Triangle 
// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
// triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// https://leetcode.com/problems/triangle/

var minimumTotal = function (triangle) {
    let dp = new Array(triangle.length + 1).fill(0); // dp = [0,0,0,0,0]
    // what is length of traingle? 4
    // then what is length of dp? 5 why? why not 4? because we need to add 0 at the end of dp array to compare the last two elements of dp array in the for loop below 
    for (let i = triangle.length - 1; i >= 0; i--) { // i = 3, 2, 1, 0
        for (let j = 0; j < triangle[i].length; j++) { // j = 0, 1, 2, 3
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
            // triangle[3][0] = 4, triangle[3][1] = 1, triangle[3][2] = 8, triangle[3][3] = 3
            // dp[0] = Math.min(0,0) + 4 = 4,  
            // dp[1] = Math.min(0,0) + 1 = 1, 
            // dp[2] = Math.min(0,0) + 8 = 8, 
            // dp[3] = Math.min(0,0) + 3 = 3

            // triangle[2][0] = 6, triangle[2][1] = 5, triangle[2][2] = 7
            // dp[0] = Math.min(4,1) + 6 = 7,
            // dp[1] = Math.min(1,8) + 5 = 6,
            // dp[2] = Math.min(8,3) + 7 = 10,
            // dp[3] = Math.min(3,0) + 0 = 3

            // triangle[1][0] = 3, triangle[1][1] = 4
            // dp[0] = Math.min(7,6) + 3 = 10,
            // dp[1] = Math.min(6,10) + 4 = 14,
            // dp[2] = Math.min(10,3) + 0 = 3,
            // dp[3] = Math.min(3,0) + 0 = 3

            // triangle[0][0] = 2
            // dp[0] = Math.min(10,14) + 2 = 12,
            // dp[1] = Math.min(14,3) + 0 = 3,
            // dp[2] = Math.min(3,3) + 0 = 3,
            // dp[3] = Math.min(3,0) + 0 = 0
        }
    }
    return dp[0];
}

// time complexity: O(n^2)
// space complexity: O(n