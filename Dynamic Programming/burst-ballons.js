// Burst Ballons
// Input nums = [3,1,5,8] , output = 167 => [3,1,5,8] => [3,5,8] => [3,8] => [8] => []

var maxCoins = function (nums) {
    nums.unshift(1);
    nums.push(1);
    let n = nums.length; // n = 6
    let dp = Array(n).fill(0).map(() => Array(n).fill(0));
    // dp = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0], [0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]
    for (let len = 2; len < n; len++) {
        for (let left = 0; left < n - len; left++) {
            let right = left + len;
            for (let i = left + 1; i < right; i++) {
                dp[left][right] = Math.max(dp[left][right], nums[left] * nums[i] * nums[right] + dp[left][i] + dp[i][right]);
            }
        }
    }
    return dp[0][n - 1];
}