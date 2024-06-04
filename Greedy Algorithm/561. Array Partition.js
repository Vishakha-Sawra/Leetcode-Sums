// 561. Array Partition

var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};

// Time Complexity: O(n log n) => O(n log n) for sorting; O(n) for iterating through the array
// Space Complexity: O(1) => O(1) for the constant space used