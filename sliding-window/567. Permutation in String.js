// 567. Permutation in String
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true

var checkInclusion = function (s1, s2) {
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = map[s1[i]] ? map[s1[i]] + 1 : 1;
    }
    let count = Object.keys(map).length;
    let left = 0;
    let right = 0;
    while (right < s2.length) {
        if (map[s2[right]] !== undefined) {
            map[s2[right]]--;
            if (map[s2[right]] === 0) {
                count--;
            }
        }
        right++;
        while (count === 0) {
            if (right - left === s1.length) {
                return true;
            }
            if (map[s2[left]] !== undefined) {
                if (map[s2[left]] === 0) {
                    count++;
                }
                map[s2[left]]++;
            }
            left++;
        }
    }
    return false;
};