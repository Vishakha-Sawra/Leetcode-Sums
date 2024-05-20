// Find out how many times the array has been rotated

function findKRotation(arr) {
    let low = 0, high = arr.length - 1;
    let ans = Infinity;
    let index = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[low] <= arr[high]) {
            if (arr[low] < ans) {
                index = low;
                ans = arr[low];
            }
            break;
        }

        // If left part is sorted:
        if (arr[low] <= arr[mid]) {
            // Keep the minimum:
            if (arr[low] < ans) {
                index = low;
                ans = arr[low];
            }
            // Eliminate left half:
            low = mid + 1;
        } else { // If right part is sorted:
            // Keep the minimum:
            if (arr[mid] < ans) {
                index = mid;
                ans = arr[mid];
            }
            // Eliminate right half:
            high = mid - 1;
        }
    }
    return index;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let ans = findKRotation(arr);
console.log("The array is rotated " + ans + " times.");



