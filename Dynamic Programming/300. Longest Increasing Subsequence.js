// 300. Longest Increasing Subsequence

var lengthOfLIS = function(nums) {
    if (!nums.length) return 0;
    let dp = new Array(nums.length).fill(1);
    let max = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                max = Math.max(max, dp[i]);
            }
        }
    }
    return max;
}

// Binary Search Approach

var lengthOfLIS = function(nums) {
    let tails = [];
    
    for (let num of nums) {
        let left = 0, right = tails.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === tails.length) {
            tails.push(num);
        } else {
            tails[left] = num;
        }
    }
    
    return tails.length;
};

// Time Complexity: O(n log n)