// 326. Power of Three

var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    while (n % 3 == 0) {
        n /= 3;
    }
    return n == 1;
};

// Time complexity: O(logn)
// space complexity: O(1)

// Recursion 

var isPowerOfThree = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n % 3 !== 0) return false;
    return isPowerOfThree(n / 3);
};

// Time complexity: O(logn)
// space complexity: O(logn)