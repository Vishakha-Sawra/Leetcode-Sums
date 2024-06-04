// 334. Increasing Triplet Subsequence

var increasingTriplet = function (nums) {
    let first = Infinity;
    let second = Infinity;

    for (let currentNumber of nums) {
        if (currentNumber > second && currentNumber > first) {
            return true;
        }
        if (currentNumber > first) {
            second = currentNumber;
        } else {
            first = currentNumber;
        }
    }
    return false;
};