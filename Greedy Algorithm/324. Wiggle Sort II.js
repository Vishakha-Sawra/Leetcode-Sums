// 324. Wiggle Sort II

// nums = [1, 5, 1, 1, 6, 4]

var wiggleSort = function (nums) {
    nums.sort((a, b) => a - b);
    let mid = Math.floor(nums.length / 2);
    mid += nums.length % 2 == 0 ? 0 : 1;
    let small = nums.slice(0, mid);
    let large = nums.slice(mid);
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            nums[i] = small.pop();
        } else {
            nums[i] = large.pop();
        }
    }
};

// Time complexity: O(nlogn)
// Space complexity: O(n)

