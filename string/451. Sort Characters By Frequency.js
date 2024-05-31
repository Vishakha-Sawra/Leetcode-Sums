// 451. Sort Characters By Frequency

var frequencySort = function (s) {
    let map = {};
    for (let c of s) {
        map[c] = (map[c] || 0) + 1;
    }
    let sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
    let res = '';
    for (let c of sorted) {
        res += c.repeat(map[c]);
    }
    return res;
};

