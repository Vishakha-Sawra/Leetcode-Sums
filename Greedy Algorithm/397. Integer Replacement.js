// 397. Integer Replacement

// Input: n = 8
// Output: 3


var integerReplacement = function (n) {
    let count = 0;
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else if (n === 3 || (n - 1) % 4 === 0) {
            n--;
        } else {
            n++;
        }
        count++;
    }
    return count;
};

// Time Complexity: O(logN)
// Space Complexity: O(1)


