// Interleaving String

var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;
    var dp = [];
    for (var i = 0; i <= s1.length; i++) {
        dp[i] = [];
        for (var j = 0; j <= s2.length; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
            } else if (i === 0) {
                dp[i][j] = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
            } else {
                dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
            }
        }
    }
    return dp[s1.length][s2.length];
};

// time:  O(mn)
// space: O(mn)


var isInterleave = function (s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;

    if (m + n !== s3.length) {
        return false;
    }

    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));

    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i > 0 && s1[i - 1] === s3[i + j - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j];
            }
            if (j > 0 && s2[j - 1] === s3[i + j - 1]) {
                dp[i][j] = dp[i][j] || dp[i][j - 1];
            }
        }
    }

    return dp[m][n];
}

// FINSL

var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) return false;

    let dp = new Array(s1.length + 1);
    dp[s1.length] = [];
    dp[s1.length][s2.length] = true;

    for (let i = s1.length; i >= 0; i--) {
        if (dp[i] === undefined) {
            dp[i] = [];
        }
        for (let j = s2.length; j >= 0; j--) {
            if (dp[i][j] === undefined) {
                dp[i][j] = false;
            }

            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
                dp[i][j] = true;
            }
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
                dp[i][j] = true;
            }
        }
    }

    return dp[0][0];
};