// 66. Plus One

var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    return [1, ...digits]; // if all digits are 9, then we need to add 1 to the beginning of the array and set all other digits to 0 
}

// Time complexity: O(n)
// Space complexity: O(1)
