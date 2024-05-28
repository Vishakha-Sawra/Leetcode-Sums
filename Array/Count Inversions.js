// Count Inversions

// Given an array of integers. Find the Inversion Count in the array. 

// i < j and arr[i] > arr[j]

// brute force 

var countInversions = function (arr) {
    let n = arr.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                cnt++;
            }
        }
    }
    return cnt;
};

//  TO DO
// optimal approach
// arr = [5, 3, 2, 4, 1]
function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    let cnt = 0;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left += 1;
        } else {
            temp.push(arr[right]);
            cnt += (mid - left + 1);
            right += 1;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left += 1;
    }

    while (right <= high) {
        temp.push(arr[right]);
        right += 1;
    }

    // transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

    return cnt;
}

function mergeSort(arr, low, high) {
    let cnt = 0;
    if (low >= high) {
        return cnt;
    }
    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(arr, low, mid);
    cnt += mergeSort(arr, mid + 1, high);
    cnt += merge(arr, low, mid, high);
    return cnt;
}

function numberOfInversions(a) {
    let n = a.length;
    return mergeSort(a, 0, n - 1);
}