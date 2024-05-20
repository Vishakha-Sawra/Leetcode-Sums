// 424. Longest Repeating Character Replacement
// Input: s = "AABABBA", k = 1
// Output: 4

var characterReplacement = function (s, k) {
    let max = 0;
    let left = 0;
    let right = 0;
    let map = {};
    let maxCount = 0;
    while (right < s.length) {
        map[s[right]] = map[s[right]] + 1 || 1;
        maxCount = Math.max(maxCount, map[s[right]]);
        if (right - left + 1 - maxCount > k) {
            map[s[left]]--;
            left++;
        }
        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
};

// Time complexity: O(n), where n is the length of the input string.
// Space complexity: O(1).
