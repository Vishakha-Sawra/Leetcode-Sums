// 1903. Largest Odd Number in String
// Input: num = "35427"
// Output: "35427"

var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }
    return '';
};

// Time Complexity: O(N)
// Space Complexity: O(1)