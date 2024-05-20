// 540. Single Element in a Sorted Array

var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid % 2 === 1) mid--; // make sure the mid is always at even index to compare with the next element in the array. why? because the single element is always at even index. if the mid is at odd index, we make it even by subtracting 1 from it.

        if (nums[mid] === nums[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

// give solution of time: log base 2 n and space: O(1)

var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let isEven = (right - mid) % 2 === 0;

        if (nums[mid] === nums[mid + 1]) {
            if (isEven) left = mid + 2;
            else right = mid - 1;
        } else if (nums[mid] === nums[mid - 1]) {
            if (isEven) right = mid - 2;
            else left = mid + 1;
        } else {
            return nums[mid];
        }
    }

    return nums[left];
}; 