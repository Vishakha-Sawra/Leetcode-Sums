// Word Break II

var wordBreak = function (s, wordDict) {
    let res = [];
    let map = new Map();
    return dfs(s, wordDict, res, map);
}

function dfs(s, wordDict, res, map) {
    if (map.has(s)) return map.get(s);
    if (s.length === 0) return [];
    let result = [];
    for (let word of wordDict) {
        if (s.startsWith(word)) {
            let subList = dfs(s.slice(word.length), wordDict, res, map);
            for (let sub of subList) {
                result.push(word + (sub.length === 0 ? '' : ' ') + sub);
            }
        }
    }
    map.set(s, result);
    return result;
}

// time o(n^2)
// space o(n^2)