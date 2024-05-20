// Single Number-II 
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
// Input: nums = [2,2,3,2]
// Output: 3

var singleNumber = function (nums) {
    let ones = 0, twos = 0;
    for (let i = 0; i < nums.length; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
};


