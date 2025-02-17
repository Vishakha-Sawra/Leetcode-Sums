// 3. Longest Substring Without Repeating Characters

// 1. Brute Force - Generate all subsrtings

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let hash = Array(256).fill(0);
        for (let j = i; j < s.length; j++) {
            if (hash[s.charCodeAt(j)] == 1) {
                break;    
            }
            hash[s.charCodeAt(j)] = 1;
            let len = j - i + 1;
            max = Math.max(max, len);
        }
    }
    return max;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

// 2. Sliding Window and Two Pointers

var lengthOfLongestSubstring = function(s) {
    let hash = Array(256).fill(-1);
    let max = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (hash[s.charCodeAt(right)] >= left) {
            left = hash[s.charCodeAt(right)] + 1;
        }
        hash[s.charCodeAt(right)] = right;
        let len = right - left + 1;
        max = Math.max(max, len);
    }

    return max;
}