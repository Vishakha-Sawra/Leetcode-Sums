// 139. Word Break

var wordBreak = function(s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) { // if dp[j] is true, it means that the substring from 0 to j is in the wordDict and the substring from j to i is in the wordDict as well 
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[s.length];
}

// Time complexity: O(n^2)
// Space complexity: O(n)