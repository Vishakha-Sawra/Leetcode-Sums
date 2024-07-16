// 342. Power of Four

var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    while (n % 4 == 0) {
        n /= 4;
    }
    return n == 1;
};

// Time complexity: O(logn)
// Space complexity: O(1)


// Recursion

var isPowerOfFour = function (n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n % 4 !== 0) return false;
    return isPowerOfFour(n / 4);
};

