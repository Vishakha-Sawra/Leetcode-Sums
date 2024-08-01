// 53. Maximum Subarray

var maxSubArray = function (nums) {
    let sum = 0;
    let n = nums.length;
    let max = nums[0];

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        if (sum > max) {
            max = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
};


function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, the maximum subarray sum is 0.
    }

    let maxSum = nums[0]; // Initialize maxSum with the first element.
    let currentSum = nums[0]; // Initialize currentSum with the first element.

    for (let i = 1; i < nums.length; i++) {
        // Update currentSum: Either extend the subarray or start a new subarray.
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update maxSum if currentSum is greater.
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
