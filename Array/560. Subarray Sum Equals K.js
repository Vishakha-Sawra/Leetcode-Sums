// 560. Subarray Sum Equals K

// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

var subarraySum = function (nums, k) {
    let map = new Map();
    map.set(0, 1);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) { // if the sum - k is in the map, then we have a subarray that sums to k  
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
};
// nums = [1,1,1,1,2,3] k = 3



