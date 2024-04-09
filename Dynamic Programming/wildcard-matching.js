// Wildcard Matching

var isMatch = function (s, p) {
    let i = 0, j = 0, star = -1, match = 0;
    while (i < s.length) {
        if (j < p.length && (p[j] === '?' || p[j] === s[i])) {
            i++;
            j++;
        } else if (j < p.length && p[j] === '*') {
            star = j++;
            match = i;
        } else if (star !== -1) {
            j = star + 1;
            match++;
            i = match;
        } else {
            return false;
        }
    }
    while (j < p.length && p[j] === '*') {
        j++;
    }
    return j === p.length;
}


// Dynamic Programming
// s = adceb p = *a*b // true or false? => true. how? => * matches adce, a matches a, * matches b
var isMatch = function (s, p) {
    const m = s.length;
    const n = p.length;

    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));

    dp[0][0] = true;

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }

    return dp[m][n];
};

