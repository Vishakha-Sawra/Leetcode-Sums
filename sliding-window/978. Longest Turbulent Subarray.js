// 978. Longest Turbulent Subarray
// arr = [9,4,2,10,7,8,8,1,9]
var maxTurbulenceSize = function (arr) {
    let max = 1;
    let left = 0;

    for (let right = 1; right < arr.length; right++) {
        let c = Math.sign(arr[right - 1] - arr[right]);
        if (c === 0) {
            left = right;
        } else if (right === arr.length - 1 || c * Math.sign(arr[right] - arr[right + 1]) !== -1) {
            max = Math.max(max, right - left + 1);
            left = right;
        }
    }

    return max;
};
// kadane's algorithm

var maxTurbulenceSize = function (arr) {
    let max = 1;
    let inc = 1;
    let dec = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            inc = dec + 1;
            dec = 1;
        } else if (arr[i] < arr[i - 1]) {
            dec = inc + 1;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }

        max = Math.max(max, inc, dec);
    }

    return max;
};

// time complexity: O(n) where n is the length of the input array arr
// space complexity: O(1) since we are using a constant amount of space
