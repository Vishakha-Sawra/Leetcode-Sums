// Best time to buy and sell the stock ii
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
// prices = [7,1,5,3,6,4]


var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit;
};
