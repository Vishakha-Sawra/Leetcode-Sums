// Fibonacci numbers

// 1. use recursion

var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

// tIme complexity: O(2^n)
// space complexity: O(n)

// 2. use memoization

var fib = function (n) {
    const dp = new Array(n + 1).fill(null);
    return helper(n, dp);
};

function helper(n, dp) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (dp[n] !== null) return dp[n];
    dp[n] = helper(n - 1, dp) + helper(n - 2, dp);
    return dp[n];
}

// time complexity: O(n)
// space complexity: O(n)

// 3. use bottom-up dynamic programming: Tabulation

var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
// time complexity: O(n)
// space complexity: O(n)

// 4. use bottom-up dynamic programming: Tabulation with constant space

var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let prev2 = 0;
    let prev = 1;

    for (let i = 2; i <= n; i++) {
        let cur_i = prev2 + prev;
        prev2 = prev;
        prev = cur_i;
    }
    return prev;
}

// time complexity: O(n)
// space complexity: O(1)


// Tabulation
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let dp = new Array(n + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[n - 1] + dp[n - 2];
    }
    return dp[n];
}; 
