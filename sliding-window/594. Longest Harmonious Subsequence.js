// 594. Longest Harmonious Subsequence
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
var findLHS = function (nums) {
    const map = new Map();
    let max = 0;
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const key of map.keys()) {
        if (map.has(key + 1)) {
            max = Math.max(max, map.get(key) + map.get(key + 1));
        }
    }
    return max;
}

var findLHS = function (nums) {
    nums.sort((a, b) => a - b);
    let left = 0, right = 0, max = 0;
    while (right < nums.length) {
        if (nums[right] - nums[left] === 1) {
            max = Math.max(max, right - left + 1);
        }
        if (nums[right] - nums[left] > 1) {
            left++;
        } else {
            right++;
        }
    }
    return max;
};