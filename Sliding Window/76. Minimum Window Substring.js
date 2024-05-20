// 76. Minimum Window Substring
// s = 'ddaaabbca', t = 'abc'
// Output:
var minWindow = function (s, t) {
    let map = {};
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = map[t[i]] ? map[t[i]] + 1 : 1;
    }

    let count = t.length;
    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minStart = 0;

    while (right < s.length) {
        if (map[s[right]] > 0) {
            count--;
        }
        map[s[right]]--;
        right++;

        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            map[s[left]]++;
            if (map[s[left]] > 0) {
                count++;
            }
            left++;
        }
    }

    return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
};

