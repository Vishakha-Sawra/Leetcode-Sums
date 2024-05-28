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
}