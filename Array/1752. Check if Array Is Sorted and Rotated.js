// 1752. Check if Array Is Sorted and Rotated


var check = function (nums) {
    let count = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
    }
    if (count > 1 || (count == 1 && nums[0] < nums[len])) {
        return false;
    }
    return true;
};

// nums = [3,4,5,1,2]
function check(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[(i + 1) % nums.length]) {
            count++;
        }
    }
    return count === 1 || count === 0;
}



