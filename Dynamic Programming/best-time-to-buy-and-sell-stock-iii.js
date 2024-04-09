// Best Time to Buy and Sell Stock III

Input: prices = [7,6,4,3,1]
Output: 0

var maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0;
    }

    let firstBuy = Infinity;
    let secondBuy = Infinity;

    let firstSell = 0;
    let secondSell = 0;

    for (let price of prices) {
        firstBuy = Math.min(firstBuy, price);

        firstSell = Math.max(firstSell, price - firstBuy);

        secondBuy = Math.min(secondBuy, price - firstSell);

        secondSell = Math.max(secondSell, price - secondBuy);
    }

    return secondSell;
}

// Another solution:
var maxProfit = function (prices) {
    if (prices.length == 0) return 0

    let dp = new Array(prices.length).fill(0);
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }

    min = prices[0];
    max = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i] - dp[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }
    return dp.pop();
};

