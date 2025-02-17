// 187. Repeated DNA Sequences

// 1. Brute Force - O(n^2) time, O(n) space - where n is the length of the input string s and the length of the substring is 10 characters long (n - 9) 

var findRepeatedDnaSequences = function (s) {
    const res = [];
    const set = new Set();
    for (let i = 0; i < s.length - 9; i++) { 
        const str = s.substring(i, i + 10); 
        if (set.has(str) && !res.includes(str)) {
            res.push(str);
        }
        set.add(str); 
    }
    return res;
};

// 2. Sliding Window - O(n) time, O(n) space - 

var findRepeatedDnaSequences = function(s) {
    const seen = new Set();
    const repeated = new Set();
    let l = 0, r = 0;

    while (r < s.length) {
        if (r - l + 1 === 10) {
            const str = s.substring(l, r + 1);
            if (seen.has(str)) {
                repeated.add(str);
            } else {
                seen.add(str);
            }
            l++;
        }
        r++;
    }

    return Array.from(repeated);
};
