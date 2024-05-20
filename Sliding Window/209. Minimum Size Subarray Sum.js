// 209. Minimum Size Subarray Sum
// nums = [2, 3, 1, 2, 4, 3], target = 7
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = Infinity;

    while (right < nums.length) {
        sum += nums[right];
        //right++
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            // minLen = Math.min(minLen, right - left);
            sum -= nums[left];
            left++;
        }
        right++;

    }

    return minLen === Infinity ? 0 : minLen;
}

