// Longest Valid Parentheses (HARD)

//  s = "()())" 
var longestValidParentheses = function (s) {
    let max = 0;
    let stack = [-1];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i)
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
}
// at last what will be stack? => [6]? => [6] is the last index of the string s. it's 5? =>
// Time complexity: O(n)
// Space complexity: O(n)