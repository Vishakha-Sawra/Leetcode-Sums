// best_time_to_buy_and_sell_stock_iii
// Hard
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/

var maxProfit = function (prices) {
    let buy1 = Number.MIN_SAFE_INTEGER;
    let buy2 = Number.MIN_SAFE_INTEGER;
    let sell1 = 0;
    let sell2 = 0;
    for (let i = 0; i < prices.length; i++) {
        sell2 = Math.max(sell2, buy2 + prices[i]);
        buy2 = Math.max(buy2, sell1 - prices[i]);
        sell1 = Math.max(sell1, buy1 + prices[i]);
        buy1 = Math.max(buy1, -prices[i]);
    }
    return sell2;
}

var maxProfit = function (prices) {
    if (prices.length == 0) return 0;
    let dp = new Array(prices.length).fill(0);
    let min = prices[0];
    let max = 0;

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max
    }

    min = prices[0];
    max = 0;

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i] - dp[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max
    }
    return dp.pop()
} 