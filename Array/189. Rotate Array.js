// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.
// nums = [1, 2, 3, 4, 5, 6, 7], k = 3

var rotate = function (nums, k) {
    k = k % nums.length; // k = 3 % 7 = 3
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

var reverse = function (nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};
