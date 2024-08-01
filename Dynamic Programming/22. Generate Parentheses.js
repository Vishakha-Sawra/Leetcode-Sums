// 22. Generate Parentheses

var generateParenthesis = function(n) {
    let dp = new Array(n + 1).fill().map(() => []);
    dp[0] = [''];
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            for (let left of dp[j]) {
                for (let right of dp[i - j - 1]) {
                    dp[i].push('(' + left + ')' + right);
                }
            }
        }
    }
    return dp[n];
}

// Time complexity: O(4^n / n^(3/2))
// Space complexity: O(4^n / n^(3/2))

// Optimization: Backtracking

var generateParenthesis = function(n) {
    let res = [];
    backtrack(res, '', 0, 0, n);
    return res;
}

function backtrack(res, cur, open, close, max) {
    if (cur.length === max * 2) {
        res.push(cur);
        return;
    }
    if (open < max) {
        backtrack(res, cur + '(', open + 1, close, max);
    }
    if (close < open) {
        backtrack(res, cur + ')', open, close + 1, max);
    }
}

// Time complexity: O(4^n / n^(3/2))
// Space complexity: O(4^n / n^(3/2))