// 152. Maximum Product Subarray
// nums = [1, -2, -3, 0, -4, 5] 
// Brute Force Approach
function maxProduct(nums) {
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        let prod = 1;
        for (let j = i; j < nums.length; j++) {
            prod *= nums[j];
            result = Math.max(result, prod);
        }
    }
    return result;
}

// Optimal Approach

function maxProduct(nums) {
    let n = nums.length;
    let pre = 1, suff = 1;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        if (pre === 0) pre = 1;
        if (suff === 0) suff = 1;
        pre *= nums[i];
        suff *= nums[n - i - 1];
        max = Math.max(max, Math.max(pre, suff));
    }
    return max;
}


