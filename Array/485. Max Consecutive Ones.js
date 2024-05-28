// 485. Max Consecutive Ones

// Given a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0. 

// Example 1:
// Input: [1,0,1,1,0]
// Output: 4

var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let max = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 1) {
            count++
        } else {
            count = 0;
        }
        max = Math.max(max, count);
    }
    return max;
}

