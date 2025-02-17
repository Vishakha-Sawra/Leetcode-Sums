//  1358. Number of Substrings Containing All Three Characters
// s = "abcabc"

var numberOfSubstrings = function (s) {
    let res = 0;
    let count = { a: 0, b: 0, c: 0 };
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;
        while (count.a > 0 && count.b > 0 && count.c > 0) {
            count[s[left]]--;
            left++;
        }
        res += left; // res = res + left
    }
    return res;
};

// Time complexity: O(n), where n is the length of the input string.
// Space complexity: O(1).



// 1. Brute force - O(n^3) time, O(1) space. Generate all substrings and check if they contain all three characters. 

var numberOfSubstrings = function (s) {
    let hash = { a: 0, b: 0, c: 0 };
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            hash[s[j]]++;
            if (hash.a > 0 && hash.b > 0 && hash.c > 0) {
                count++;
            }
        }
        hash = { a: 0, b: 0, c: 0 }; 
    }
    return count;
};


// Only count is different from the above solution
var numberOfSubstrings = function (s) {
    let hash = { a: 0, b: 0, c: 0 };
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            hash[s[j]]++;
            if(hash['a'] > 0 && hash['b'] > 0 && hash['c'] > 0) {
                count = count + s.length - j;
                break;
            }
        }
        hash = { a: 0, b: 0, c: 0 }; 
    }
    return count;
};