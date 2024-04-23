// 1004. Max Consecutive Ones III

var longestOnes = function (nums, k) {
    let l = 0;
    let r = 0;
    let max = 0;
    let zeroCount = 0;
    while (r < nums.length) {
        if (nums[r] === 0) {
            zeroCount++;
        }
        while (zeroCount > k) {
            if (nums[l] === 0) {
                zeroCount--;
            }
            l++;
        }
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
}
// time complexity: O(2n)
// space complexity: O(1)

// optimized solution

var longestOnes = function (nums, k) {
    let l = 0;
    let r = 0;
    let max = 0;
    let zeros = 0;
    while (r < nums.length) {
        if (nums[r] === 0) {
            zeros++;
        }
        if (zeros > k) {
            if (nums[l] === 0) {
                zeros--;
            }
            l++;
        }
        if (zeros <= k) {
            length = r - l + 1;
            max = Math.max(max, length);
        }
        r++;
    }
    return max;
}

// time complexity: O(n)
// space complexity: O(1)