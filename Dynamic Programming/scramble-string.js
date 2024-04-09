// NOT DONE

// Scramble String

var isScramble = function (s1, s2) {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;
    if (s1.split('').sort().join('') !== s2.split('').sort().join('')) return false;
    for (let i = 1; i < s1.length; i++) {
        if (isScramble(s1.substr(0, i), s2.substr(0, i)) && isScramble(s1.substr(i), s2.substr(i))) return true;
        if (isScramble(s1.substr(0, i), s2.substr(s2.length - i)) && isScramble(s1.substr(i), s2.substr(0, s2.length - i))) return true;
    }
    return false;
};

// use Dynamic Programming

var isScramble = function (s1, s2) {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;
    if (s1.split('').sort().join('') !== s2.split('').sort().join('')) return false;
    const dp = new Array(s1.length + 1).fill(false).map(() => new Array(s2.length + 1).fill(false));
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                if (dp[i - 1][j - 1]) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
                }
            }
        }
    }
    return dp[s1.length][s2.length];
};

