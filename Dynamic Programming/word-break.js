// Word Break
// s = "leetcode", wordDict = ["leet", "code"]
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

// Its said to return true then why are we returning dp[s.length]? => dp[s.length] is the last element of the dp array, which is true if the string can be broken into words from the dictionary, and false otherwise.

// Time complexity: O(n^2)
// Space complexity: O(n)