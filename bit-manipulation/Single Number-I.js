//  Single Number-I 

// Usimg the XOR operator, we can solve this problem in O(n) time complexity and O(1) space complexity. The XOR operator has the following properties:

var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

// The XOR operator has the following properties:
// 1. It returns 0 if we take XOR of two same numbers.
// 2. It returns the same number if we XOR with 0.
// 3. It is commutative, which means a ^ b = b ^ a.
// 4. It is associative, which means a ^ (b ^ c) = (a ^ b) ^ c.
//is its two different numbers, the result will be the number itself.