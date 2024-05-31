// 55. Jump Game

var canJump = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }
    return true;
}

var canJump = function (nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
        if (max >= nums.length - 1) return true;
    }
    return false;
}