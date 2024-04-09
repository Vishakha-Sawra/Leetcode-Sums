// Search Insert Position

var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
}

// Time complexity : O(n)
// Space complexity : O(1)

// DO IT IN O(LOG N) TIME

function searchInsert(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // MATH.FLOOR ROUNDS DOWN
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

// Time complexity : O(log n)
// Space complexity : O(1) since it's a constant space solution. 