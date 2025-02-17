// 1004. Max Consecutive Ones III

// 1. Brute force
// Generate all possible substrings and count the number of zeros in each substring. If the number of zeros is less than or equal to k, update the max length. Return the max length. 

var longestOnes = function (nums, k) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let zeros = 0;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 0) {
                zeros++;
            }
            if (zeros <= k) {
                max = Math.max(max, j - i + 1);
            }
        }
    }
    return max;
}

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