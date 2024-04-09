// XOR of Numbers in a Given Range 

// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise XOR of all numbers in this range, inclusive. 

// Example 1:

// Input: m = 5, n = 7

// Output: 4

// Explanation: 5 ^ 6 ^ 7 = 4

// Example 2:

// Input: m = 0, n = 1

// Output: 1

// Explanation: 0 ^ 1 = 1

// Solution 1: Brute Force

// Time complexity: O(n-m), where n and m are the input numbers.

var rangeBitwiseAnd = function(m, n) {
    let res = m;
    for (let i = m + 1; i <= n; i++) {
        res ^= i;
    }
    return res;
};

