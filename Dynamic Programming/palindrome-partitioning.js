// palindrome partitioning
// https://leetcode.com/problems/palindrome-partitioning/
// dp solution

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
var partition = function (s) {
    let result = [];
    let path = [];
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(false));
    dfs(s, 0, path, result, dp);
    return result;
}

function dfs(s, start, path, result, dp) {
    if (start === s.length) {
        result.push(path.slice());
        return;
    }
    for (let i = start; i < s.length; i++) {
        if (s[start] === s[i] && (i - start <= 2 || dp[start + 1][i - 1])) {
            dp[start][i] = true;
            path.push(s.substring(start, i + 1));
            dfs(s, i + 1, path, result, dp);
            path.pop();
        }
    }
}

// time complexity: O(n^2)
// space complexity: O(n^2) 

