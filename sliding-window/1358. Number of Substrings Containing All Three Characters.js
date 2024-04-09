//  1358. Number of Substrings Containing All Three Characters
// s = "abcabc"

var numberOfSubstrings = function(s) {
    let res = 0;
    let count = {a: 0, b: 0, c: 0};
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;
        while (count.a > 0 && count.b > 0 && count.c > 0) {
            count[s[left]]--;
            left++;
        }
        res += left;
    }
    return res;
};

// Time complexity: O(n), where n is the length of the input string.
// Space complexity: O(1).