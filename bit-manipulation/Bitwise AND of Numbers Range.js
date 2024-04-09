// Bitwise AND of Numbers Range
var rangeBitwiseAnd = function(left, right) {
    let count = 0;
    while(left != right) {
        left >>= 1; // right shift
        right >>= 1;
        count++;
    }
    return left << count;
}
