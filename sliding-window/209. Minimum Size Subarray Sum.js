// 209. Minimum Size Subarray Sum

var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let minLen = Infinity;

    while (right < nums.length) {
        sum += nums[right];
        right++;

        while (sum >= target) {
            minLen = Math.min(minLen, right - left);
            sum -= nums[left];
            left++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

