// 45. Jump Game II

var jump = function (nums) {
    let jumps = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length - 1) {
        let farthest = 0;
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        left = right + 1;
        right = farthest;
        jumps++;
    }
    return jumps;
};

var jump = function (nums) {
    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i == currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }
    return jumps;
};