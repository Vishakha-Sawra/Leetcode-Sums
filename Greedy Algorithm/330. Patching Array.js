// 330. Patching Array

var minPatches = function (nums, n) {
    let patches = 0;
    let i = 0;
    let miss = 1;
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            patches++;
        }
    }
    return patches;
};

// Time complexity: O(logn)
// Space complexity: O(1)
