// 34. Find First and Last Position of Element in Sorted Array

//  brute force

var searchRange = function (nums, target) {
    let start = -1;
    let end = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (start === -1) {
                start = i;
            } else {
                end = i;
            }
        }
    }
};

// binary search
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let start = mid;
            let end = mid;

            while (nums[start] === target) {
                start--;
            }

            while (nums[end] === target) {
                end++;
            }

            return [start + 1, end - 1];
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [-1, -1];
};

// time: O(log n + k), k is the number of target in nums
// space: O(1)

// Optimized binary search
var searchRange = function (nums, target) {
    let first = findFirst(nums, target);
    if (first == -1) return [-1, -1];
    let last = findLast(nums, target);
    return [first, last];
};

function findFirst(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) left = mid + 1;
        else right = mid;
    }
    return nums[left] == target ? left : -1;
}

function findLast(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = Math.ceil((left + right) / 2);
        if (nums[mid] > target) right = mid - 1;
        else left = mid;
    }
    return nums[right] == target ? right : -1;
}
