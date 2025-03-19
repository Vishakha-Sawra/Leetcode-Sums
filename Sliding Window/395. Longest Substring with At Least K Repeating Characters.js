// 395. Longest Substring with At Least K Repeating Characters

// 1. Brute Force - Generate all substrings and check if they have at least k repeating characters - O(n^3) time, O(n) space where n is the length of the string s

var longestSubstring = function (s, k) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let map = new Map();
            for (let char of s.slice(i, j)) {
                map.set(char, (map.get(char) || 0) + 1);
            }
            if (Array.from(map.values()).every(val => val >= k)) {
                max = Math.max(max, j - i);
            }
        }
    }
    return max;
}


// 2. Sliding Window and Two Pointers - O(n) time, O(1) space where n is the length of the string s

var longestSubstring = function (s, k) {
    let max = 0;
    let map = new Map();
    for (let unique = 1; unique <= new Set(s).size; unique++) {
        map.clear();
        let left = 0;
        let right = 0;
        let countAtLeastK = 0;
        while (right < s.length) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            if (map.get(s[right]) === k) {
                countAtLeastK++;
            }
            while (map.size > unique) {
                map.set(s[left], map.get(s[left]) - 1);
                if (map.get(s[left]) === k - 1) {
                    countAtLeastK--;
                }
                if (map.get(s[left]) === 0) {
                    map.delete(s[left]);
                }
                left++;
            }
            if (map.size === unique && countAtLeastK === unique) {
                max = Math.max(max, right - left + 1);
            }
            right++;
        }
    }
    return max;
}