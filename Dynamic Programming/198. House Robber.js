// 198. House Robber

var rob = function (nums) {
    let dp = new Array(nums.length + 1).fill(0);
    dp[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
    return dp[nums.length];
}

// Time complexity: O(n)
// Space complexity: O(n)

// 2. Space optimized DP solution (O(1) space) 

var rob = function (nums) {
    let prevMax = 0;
    let currMax = 0;
    for (let num of nums) {
        let temp = currMax;
        currMax = Math.max(currMax, prevMax + num);
        prevMax = temp;
    }
    return currMax;
}

// Time complexity: O(n)
// Space complexity: O(1)
