// remove elements from an array

var removeElement = function (nums, val) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i += 1;
        }
        j += 1;
    }
    return i;
};


// time complexity: O(n)
// space complexity: O(1)
