// 410. Split Array Largest Sum

function countPartitions(a, maxSum) {
    let n = a.length;  // size of array
    let partitions = 1;
    let subarraySum = 0;
    for (let i = 0; i < n; i++) {
        if (subarraySum + a[i] <= maxSum) {
            subarraySum += a[i];
        } else {
            partitions++;
            subarraySum = a[i];
        }
    }
    return partitions;
}

function splitArray(nums, k) { // k is 
    let low = Math.max(...nums);
    let high = nums.reduce((acc, curr) => acc + curr, 0); // sum of all elements in the array 
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let partitions = countPartitions(nums, mid);
        if (partitions > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

let a = [10, 20, 30, 40];
let k = 2;
let ans = largestSubarraySumMinimized(a, k);
console.log("The answer is:", ans);


