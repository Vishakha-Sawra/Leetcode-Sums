function merge(arr, low, mid, high) {
    let temp = []; // Temporary array
    let left = low;  // Starting index of left half
    let right = mid + 1; // Starting index of right half

    // Merge elements in sorted order
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // If elements remain in left half
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // If elements remain in right half
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Copy back to the original array
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low]; // i - low is the index of temp array to copy from 
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);   // Sort left half
    mergeSort(arr, mid + 1, high); // Sort right half
    merge(arr, low, mid, high); // Merge sorted halves
}

// Example usage
let arr = [9, 4, 7, 6, 3, 1, 5];
console.log("Before sorting:", arr);
mergeSort(arr, 0, arr.length - 1);
console.log("After sorting:", arr);
