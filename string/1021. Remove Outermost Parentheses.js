// 1021. Remove Outermost Parentheses

// Input: s = "(()())(())"
// Output: "()()()"

var removeOuterParentheses = function (s) {
    let n = s.length;
    let result = '';
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            if (count !== 0) {
                result += s[i];
            }
            count++;
        } else {
            count--;
            if (count !== 0) {
                result += s[i];
            }
        }
    }
    return result;
};
// Time Complexity: O(N)
// Space Complexity: O(N)