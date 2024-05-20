// Length of last word

var lengthOfLastWord = function (s) {
    let count = 0
    for (let i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) != ' ') {
            count++
        } else {
            if (count > 0) {
                return count
            }
        }
    }
    return count
};

// Time complexity : O(n)
// Space complexity : O(1) since it's a constant space solution.