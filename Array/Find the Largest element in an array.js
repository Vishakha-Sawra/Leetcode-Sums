// Find the Largest element in an array
// Given an array, find the largest element in it.
// nums = [1, 5, 6, 3, 8], return 8

var findLargestElement = function (nums) {
    let max = nums[0];
    for (var i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }
    return max;
};

