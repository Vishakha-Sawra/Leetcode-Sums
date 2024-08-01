// 20. Valid Parentheses

var isValid = function(s) {
    let stack = [];
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) { // if it's an opening bracket push the closing bracket to the stack 
            stack.push(map[s[i]]); 
        } else {
            if (s[i] !== stack.pop()) { // if it's a closing bracket, check if it matches the last element in the stack 
                return false;
            }
        }
    }
    return stack.length === 0; 
}

// Time complexity: O(n)
// Space complexity: O(n)