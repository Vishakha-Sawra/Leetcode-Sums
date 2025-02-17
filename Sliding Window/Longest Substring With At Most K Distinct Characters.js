// Longest Substring With At Most K Distinct Characters

// 1. Brute Force - Generate all substrings and check if they have at most k distinct characters - O(n^3) time, O(n) space where n is the length of the string s 

var lengthOfLongestSubstringKDistinct = function (s, k) {
    let max = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.clear();
        for (let j = i; j < s.length; j++) {
            map.set(s[j], (map.get(s[j]) || 0) + 1);
            if (map.size <= k) {
                max = Math.max(max, j - i + 1);
            }
        }
    }
    return max;
}

// 2. Sliding Window and Two Pointers - O(n) time, O(k) space where n is the length of the string s
// while loop

var lengthOfLongestSubstringKDistinct = function (s, k) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let map = new Map();

    while (right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        while (map.size > k) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
}

// if loop 
var lengthOfLongestSubstringKDistinct = function (s, k) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let map = new Map();
    while (right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        if (map.size > k) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left++;
        }
        if (map.size <= k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }
        right++;
    }
    return maxLen;
};