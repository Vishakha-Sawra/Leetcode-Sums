// 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
}

// Dynamic Programming Approach

var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    let dp = new Array(prices.length).fill(0);
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return dp[prices.length - 1];
}