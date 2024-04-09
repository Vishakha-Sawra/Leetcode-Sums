// K largest element in array
var findKthLargest = function (nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);
    if (k < arr.length - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, end, k);
    } else if (k > arr.length - pivotIndex) {
        return quickSelect(arr, start, pivotIndex - 1, k);
    }
    return arr[pivotIndex];
};

function partition(arr, start, end) {
    const pivot = arr[end];
    let i = start;
    let j = end - 1;
    while (i <= j) {
        while (arr[i] < pivot) {
            i += 1;
        }
        while (arr[j] > pivot) {
            j -= 1;
        }
        if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
        }
    }
    swap(arr, i, end);
    return i;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}