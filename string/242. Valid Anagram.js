// 242. Valid Anagram

// Input: s = "anagram", t = "nagaram"
// Output: true

// 1. Using Sorting
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
};

// 2. Using Hash Table
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let hash = {}; // {a: 3, n: 1, g: 1, r: 1, m: 1}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!hash[t[i]]) return false;
        hash[t[i]]--;
    }
    return true;
};


