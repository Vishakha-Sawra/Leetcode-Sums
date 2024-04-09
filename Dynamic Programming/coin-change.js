//  Coin Change
// coins = [1, 2, 5], amount = 11
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    // initially dp = [0, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity] 
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) { // what does this mean? => if coin is less than or equal to the amount
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
};

// time o(n * k)
// space o(n * k)

