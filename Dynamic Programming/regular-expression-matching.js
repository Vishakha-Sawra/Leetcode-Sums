// Regular Expression Matching

var isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }
    if (p.length === 1) {
        return s.length === 1 && (p[0] === '.' || p[0] === s[0]);
    }
    if (p[1] !== '*') {
        if (s.length === 0) {
            return false;
        }
        return (p[0] === '.' || p[0] === s[0]) && isMatch(s.slice(1), p.slice(1));
    }
    while (s.length > 0 && (p[0] === '.' || p[0] === s[0])) {
        if (isMatch(s, p.slice(2))) {
            return true;
        }
        s = s.slice(1);
    }
    return isMatch(s, p.slice(2));
};

// Time complexity: O(n^2)
// Space complexity: O(n^2)
