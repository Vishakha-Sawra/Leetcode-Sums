// 409. Longest Palindrome

var longestPalindrome = function (s) {
    let map = new Map();
    let count = 0;
    let odd = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let [key, value] of map) {
        if (value % 2 === 0) {
            count += value;
        } else {
            count += value - 1;
            odd = 1;
        }
    }
    return count + odd;
};

// Time Complexity: O(n + k) => O(n) for large inputs; k is the number of unique characters in the input string
// Space Complexity: O(k)

// more concise solution

const longestPalindrome = function (s) {
    const map = new Map();
    let count = 0;
    let odd = 0;

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const value of map.values()) {
        count += Math.floor(value / 2) * 2;
        if (value % 2 === 1) {
            odd = 1;
        }
    }

    return count + odd;
};