// remove_duplicate_from_sorted_array.js

var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let currentIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[currentIndex]) {
            currentIndex++;
            nums[currentIndex] = nums[i];
        }
    }

    return currentIndex + 1;
};

// time complexity: O(n)
// space complexity: O(1)
