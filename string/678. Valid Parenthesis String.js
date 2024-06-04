// 678. Valid Parenthesis String

// Brute Solution
var checkValidString = function (s) {
    return check(s, 0, 0);
};

var check = function (s, start, count) {
    if (count < 0) return false;
    if (start === s.length) return count === 0;
    if (s[start] === '(') {
        count++;
    } else if (s[start] === ')') {
        count--;
    } else if (s[start] === '*') {
        return check(s, start + 1, count - 1) || check(s, start + 1, count + 1) || check(s, start + 1, count);
    }

    return check(s, start + 1, count);
};


// Optimized Solution
var checkValidString = function (s) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            min++;
            max++;
        } else if (s[i] === ')') {
            min--;
            max--;
        } else {
            min--;
            max++;
        }
        if (max < 0) return false;
        min = Math.max(min, 0);
    }
    return min === 0;
}