// Best time to buy and sell stock IV

//  k= 2 prices = [3,2,6,5,0,3] output = 7
var maxProfit = function (k, prices) {
    if (prices.length === 0) return 0;
    let dp = new Array(k + 1).fill(0).map(() => new Array(prices.length).fill(0));
    for (let i = 1; i < dp.length; i++) {
        let maxDiff = -prices[0];
        for (let j = 1; j < dp[0].length; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
            maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
        }
    }
    return dp[k][prices.length - 1];
};

// time o(n * k)
// space o(n * k)