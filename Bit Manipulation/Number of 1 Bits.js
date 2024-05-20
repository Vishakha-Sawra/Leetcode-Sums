// Number of 1 Bits
// Input: n = 00000000000000000000000000001011
// Output: 3
var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
};

var hamminhWeight = function (n) {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
}