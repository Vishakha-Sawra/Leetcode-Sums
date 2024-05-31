// 205. Isomorphic Strings

// Input: s = "egg", t = "add"
// Output: true
// e -> a
// g -> d
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let m = new Map(); // {e: a, g: d}
    for (let i = 0; i < s.length; i++) {
        if (m.has(s[i]) && m.get(s[i]) !== t[i]) return false;
        else m.set(s[i], t[i]);
    }
    return new Set([...m.values()]).size === m.size;
    // [a, d] => 2 == 2 => true
};





