// Reverse Array

function revArr(arr) {
    helper(arr, 0, arr.length - 1);
    return arr;
}

function helper(arr, start, end) {
    if (start >= end) {
        return;
    }

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    helper(arr, start + 1, end - 1);
}

let arr = [1, 2, 3, 4, 5];
let res = revArr(arr);
console.log(res);

// Output: [5, 4, 3, 2, 1]

// Time Complexity: O(n)
// Space Complexity: O(n)