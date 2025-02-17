// 209. Minimum Size Subarray Sum
// nums = [2, 3, 1, 2, 4, 3], target = 7

// 1. Brute Force - Generate all subarrays and check if sum >= target and update minLen if needed - O(n^2) 

var minSubArrayLen = function (target, nums) {
    let minLen = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }
    return minLen === Infinity ? 0 : minLen;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

// 2. Sliding Window - O(n)
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = Infinity;

    while (right < nums.length) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;

    }

    return minLen === Infinity ? 0 : minLen;
}

