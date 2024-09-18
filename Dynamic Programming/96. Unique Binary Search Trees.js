// Unique Binary Search Trees
// n = 3, return 5

function numUniqueBSTs(n) {
    if (n <= 0) return 0;
    const dp = new Array(n + 1).fill(0);
    dp[0] = dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j]; // dp[j] is the left subtree, dp[i - 1 - j] is the right subtree   
        }
    }

    return dp[n];
}