// Subarray with k different integers
// nums = [2, 1, 1, 1, 3, 4, 3, 2], k = 2 , Output:
var subarraysWithKDistinct = function (nums, k) {
    return atMostK(nums, k) - atMostK(nums, k - 1);
}

function atMostK(nums, k) {
    let count = 0;
    let left = 0;
    let right = 0;
    let map = new Map();
    while (right < nums.length) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        while (map.size > k) {
            map.set(nums[left], map.get(nums[left]) - 1);
            if (map.get(nums[left]) === 0) {
                map.delete(nums[left]);
            }
            left++;
        }
        count = count + (right - left + 1);
        right++;
    }
    return count;
}

