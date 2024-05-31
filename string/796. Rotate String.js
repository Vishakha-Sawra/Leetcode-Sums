// 796. Rotate String

var rotateString = function (s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
};

var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;
    if (s.length === 0) return true;
    for (let i = 0; i < s.length; i++) {
        if (s === goal) return true;
        s = s.slice(1) + s[0];
    }
    return false;
};