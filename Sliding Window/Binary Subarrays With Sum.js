// Binary Subarrays With Sum

var numSubarraysWithSum = function (nums, goal) {
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - goal)) {
            count += map.get(sum - goal);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};

var numSubarraysWithSum = function (arr, k) {
    let sum = 0, l = 0, r = 0, count = 0;
    if (k < 0) return 0;
    while (r < arr.length) {
        sum += arr[r];
        while (sum > k) {
            sum -= arr[l];
            l++;
        }
        if (sum <= k) {
            count += r - l + 1;
        }
        r++;
    }
    return count;
}

function numSubarraysWithSum(nums, goal) {
    let less_than_equal_goal = func(nums, goal);
    let less_than_equal_goal_minus1 = func(nums, goal - 1);
    return less_than_equal_goal - less_than_equal_goal_minus1;
}