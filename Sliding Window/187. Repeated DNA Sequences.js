// 187. Repeated DNA Sequences

var findRepeatedDnaSequences = function (s) {
    const map = {};
    const res = [];
    for (let i = 0; i < s.length - 9; i++) {
        const str = s.substring(i, i + 10);
        if (map[str] === 1) {
            res.push(str);
        }
        map[str] = (map[str] || 0) + 1;
    }
    return res;
}

// sliding window 

var findRepeatedDnaSequences = function (s) {
    const map = {};
    const res = [];
    let l = 0, r = 0;
    while (r < s.length) {
        const str = s.substring(r - 9, r + 1);
        if (map[str] === 1) {
            res.push(str);
        }
        map[str] = (map[str] || 0) + 1;
        r++;
    }
    return res;
}

// sliding window with set

var findRepeatedDnaSequences = function (s) {
    const set = new Set();
    const res = new Set();
    let l = 0, r = 0;
    while (r < s.length) {
        const str = s.substring(r - 9, r + 1);
        if (set.has(str)) {
            res.add(str);
        }
        set.add(str);
        r++;
    }
    return [...res];
}


var findRepeatedDnaSequences = function (s) {
    const map = {};
    const res = [];
    const added = new Set();
    let l = 0, r = 0;
    while (r < s.length) {
        const str = s.substring(r - 9, r + 1);
        if (map[str] === 1 && !added.has(str)) {
            res.push(str);
            added.add(str);
        }
        map[str] = (map[str] || 0) + 1;
        r++;
    }
    return res;
}