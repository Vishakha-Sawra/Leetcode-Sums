// Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// Input: n = 2
// Output: 2

var climbStairs = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// Recursive solution

var climbStairs = function (n) {
    return climbStairsHelper(n);
}

var climbStairsHelper = function (n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    return climbStairsHelper(n - 1) + climbStairsHelper(n - 2);
}

// Follow up: Can you solve the problem in O(1) space?
// Space Optimized Iterative solution - O(1) space complexity
var climbStairs = function (n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
} 
