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

// Why does this work? => We are counting the number of subarrays with at most k distinct integers. We then subtract the number of subarrays with at most k - 1 distinct integers from the number of subarrays with at most k distinct integers to get the number of subarrays with exactly k distinct integers. 


// 1. Brute force - Generate all possible subarrays and check if they have the sum equal to the target sum - O(n) time, O(1) space where n is the length of the input array 

var subarraysWithKDistinct = function (nums, goal) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let map = new Map();
        for (let j = i; j < nums.length; j++) {
            map.set(nums[j], (map.get(nums[j]) || 0) + 1);
            if (map.size === goal) {
                count = count + 1;
            } else if (map.size > goal) {
                break;
            }
        }
    }
    return count;
}