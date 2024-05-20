// 69. Sqrt(x)

var mySqrt = function (x) {
    if (x === 0) return 0;
    let left = 1;
    let right = x
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if ((mid * mid) <= x) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return right;
};

// Find the Nth root of a number using binary search

function floorSqrt(n) {
    let low = 1, high = n;
    // Binary search on the answers:
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let val = mid * mid;
        if (val <= n) {
            // Eliminate the left half:
            low = mid + 1;
        }
        else {
            // Eliminate the right half:
            high = mid - 1;
        }
    }
    return high;
}