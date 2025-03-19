// Quick Sort Algorithm

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) { 
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap pivot with correct position
    return j;
}

function quickSortHelper(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        quickSortHelper(arr, low, pIndex - 1);
        quickSortHelper(arr, pIndex + 1, high);
    }
}

function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1);
    return arr;
}

// Example usage
let arr = [4, 6, 2, 5, 7, 9, 1, 3];

console.log("Before Quick Sort:", arr);
arr = quickSort(arr);
console.log("After Quick Sort:", arr);
