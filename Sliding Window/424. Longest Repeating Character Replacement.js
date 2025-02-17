// 424. Longest Repeating Character Replacement
// Input: s = "AABABBA", k = 1
// Output: 4

// 1. Brute Force : Generate all possible substrings and check if they can be converted to the same character by changing at most k characters.
// Time complexity: O(n^2), where n is the length of the input string. 
// Space complexity: O(1). 

var characterReplacement = function (s, k) {
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        let map = {};
        for (let j = i; j < s.length; j++) {
            map[s[j]] = (map[s[j]] || 0) + 1;
            let maxFreq = Math.max(...Object.values(map)); 
            let changes = (j - i + 1) - maxFreq;
            if (changes <= k) {
                maxLen = Math.max(maxLen, j - i + 1);
            }
        }
    }

    return maxLen;
};

// 2. Sliding Window: 

var characterReplacement = function (s, k) {
    let max = 0;
    let left = 0;
    let right = 0;
    let map = new Map();
    let maxFreq = 0;

    while (right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, map.get(s[right]));

        if (right - left + 1 - maxFreq > k) {
            map.set(s[left], map.get(s[left]) - 1);
            left++;
        }

        max = Math.max(max, right - left + 1);
        right++;
    }

    return max;
};

// Time complexity: O(n), where n is the length of the input string.
// Space complexity: O(1).


