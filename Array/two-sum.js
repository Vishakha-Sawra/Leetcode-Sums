// Two SUM

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }

    }
}

// Time complecity : O(n^2)

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(nums, target) {

    const numIndices = new Map(); // {2: 0, 7: 1, 11: 2, 15: 3}

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 9 - 2 = 7

        if (numIndices.has(complement)) { // 7 is in the map so return [0, 1]

            return [numIndices.get(complement), i]; // [0, 1]
        }

        numIndices.set(nums[i], i);
        // {2: 0} {2: 0, 7: 1} {2: 0, 7: 1, 11: 2} {2: 0, 7: 1, 11: 2, 15: 3}
    }

    return [];
}