// 115. Distinct Subsequences

var numDistinct = function (s, t) {
    const dp = Array.from({ length: t.length + 1 }, () => Array.from({ length: s.length + 1 }, () => 0));
    for (let i = 0; i <= s.length; i++) {
        dp[0][i] = 1;
    }
    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            if (t[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[t.length][s.length];
}

// time o(n * m) | space o(n * m)


// s = "rabbbit", t = "rabbit"

var numDistinct = function (s, t) {
    let dp = Array(t.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < s.length; i++) {
        for (let j = dp.length - 1; j >= 0; j--) {
            if (s[i] === t[j]) {
                dp[j + 1] += dp[j]
            }
        }
    }
    return dp[t.length];
};


// s = "rabbbit", t = "rabbit"

var numDistinct = function (s, t) {
    const dp = Array.from({ length: t.length + 1 }, () => Array(s.length + 1).fill(0));
    // what does array.from mean? => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

    for (let i = 0; i <= s.length; i++) {
        dp[0][i] = 1;
    } // i is row or column? => column

    for (let i = 1; i <= t.length; i++) {
        for (let j = 1; j <= s.length; j++) {
            dp[i][j] = dp[i][j - 1] + (t[i - 1] === s[j - 1] ? dp[i - 1][j - 1] : 0);
        }
    }
    return dp[t.length][s.length];
}
