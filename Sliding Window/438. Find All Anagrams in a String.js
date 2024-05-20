// 438. Find All Anagrams in a String
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]

var findAnagrams = function (s, p) {
    let result = [];
    let map = {};
    for (let i = 0; i < p.length; i++) {
        map[p[i]] = map[p[i]] ? map[p[i]] + 1 : 1;
    }
    let count = Object.keys(map).length;
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (map[s[right]] !== undefined) {
            map[s[right]]--;
            if (map[s[right]] === 0) {
                count--;
            }
        }
        right++;
        while (count === 0) {
            if (right - left === p.length) {
                result.push(left);
            }
            if (map[s[left]] !== undefined) {
                if (map[s[left]] === 0) {
                    count++;
                }
                map[s[left]]++;
            }
            left++;
        }
    }
    return result;
};

// time complexity: O(n) where n is the length of the input string s
// space complexity: O(1) since the map object has a fixed size of 26 characters
