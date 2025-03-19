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

// 2. Recursion using single var. 

function swapSinglePointer(arr, i) {
    let n = arr.length;
    if (i >= Math.floor(n / 2)) return; // Base case: Stop at the middle

    // Swap elements
    [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];

    // Recursive call moving towards the middle
    swapSinglePointer(arr, i + 1);
}

// Example usage
let arr2 = [1, 2, 3, 4, 5];
swapSinglePointer(arr2, 0);
console.log(arr2); // Output: [5, 4, 3, 2, 1]
