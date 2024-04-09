// Input: start = 10, goal = 7
// Output: 3


var minBitFlips = function (start, goal) {
    let a = start ^ goal;
    let count = 0;

    while (a !== 0) {
        if (a & 1) {
            count++;
        }

        a = a >> 1; // right shift by 1 bit to check next bit in the number a.
    }

    return count;
};

var minBitsFlips = function (start, goal) {
    let a = start ^ goal;
    let count = 0;
    while (a != 0) {
        if (a & 1) { // if a & 1 is 1, then it means the last bit of a is 1.
            count++
        }
        a = a >> 1;
    }
    return count;
}