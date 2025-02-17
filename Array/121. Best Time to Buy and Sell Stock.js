// 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    return maxProfit;
}


var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
};