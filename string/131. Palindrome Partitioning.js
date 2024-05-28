// 131. Palindrome Partitioning

// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// not done yet

var partition = function (s) {
    let res = [];
    let path = [];
    dfs(0);
    return res;

    function dfs(start) {
        if (start === s.length) {
            res.push(path.slice()); // slice() to make a copy of the array and push it to the result array res
            return;
        }
        for (let i = start; i < s.length; i++) {
            if (isPalindrome(start, i)) {
                path.push(s.substring(start, i + 1));
                dfs(i + 1);
                path.pop(); // backtrack to the previous state
            }
        }
    }

    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
};