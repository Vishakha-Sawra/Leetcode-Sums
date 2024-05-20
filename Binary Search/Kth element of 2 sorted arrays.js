// Kth element of 2 sorted arrays

function kthElement(arr1, arr2, m, n, k) {
    if (m > n) {
        return kthElement(arr2, arr1, n, m, k);
    }

    let low = Math.max(0, k - m), high = Math.min(k, n);

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = k - cut1;
        let l1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : arr1[cut1 - 1];
        let l2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : arr2[cut2 - 1];
        let r1 = cut1 === n ? Number.MAX_SAFE_INTEGER : arr1[cut1];
        let r2 = cut2 === m ? Number.MAX_SAFE_INTEGER : arr2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }
        else if (l1 > r2) {
            high = cut1 - 1;
        }
        else {
            low = cut1 + 1;
        }
    }
    return 1;
}

let array1 = [2, 3, 6, 7, 9];
let array2 = [1, 4, 8, 10];
let m = array1.length;
let n = array2.length;
let k = 5;
console.log("The element at the kth position in the final sorted array is " + kthElement(array1, array2, m, n, k));