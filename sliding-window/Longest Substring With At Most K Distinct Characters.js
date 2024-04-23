// Longest Substring With At Most K Distinct Characters

var lengthOfLongestSubstringKDistinct = function (s, k) {
    if (s.length === 0) return 0;
    let left = 0;
    let right = 0;
    let max = 0;
    let map = {};
    while (right < s.length) {
        map[s[right]] = (map[s[right]] || 0) + 1;
        if (map.size > k) {
            map[s[left]]--;
            if (map[s[left]] === 0) {
                delete map[s[left]];
            }
            left++;
        }
        if (map.size <= k) {
            max = Math.max(max, right - left + 1);
        }
        right++;
    }
    return max;
}