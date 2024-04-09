// Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            start = Math.max(map.get(s[i]) + 1, start);
        }
        max = Math.max(max, i - start + 1);
        map.set(s[i], i);
    }
    return max;
};

