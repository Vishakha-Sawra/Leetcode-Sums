// 14. Longest Common Prefix
// Input: strs = ["flower","flow","flight"]
// Output: "fl"


var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let str of strs) {
            if (str[i] !== strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};