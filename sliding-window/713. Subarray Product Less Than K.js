// 713. Subarray Product Less Than K

var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;
    let count = 0;
    let product = 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        count += right - left + 1;
    }
    return count;
};

// what is /= operator? => it divides the left operand with the right operand and assigns the result to the left operand (e.g., x /= y is equivalent to x = x / y)
// why do we need to divide the product by nums[left]? => because the product is greater than or equal to k, so we need to reduce the product by dividing it by nums[left] to make it less than k and then we can move the left pointer to the right to consider the next subarray that satisfies the condition  product < k.
// time complexity: O(n) where n is the length of the input array nums
// space complexity: O(1) since we are using a constant amount of space