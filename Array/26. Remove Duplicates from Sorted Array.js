// 26. Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

// 27. Remove Element