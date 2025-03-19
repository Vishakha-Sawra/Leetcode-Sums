// 3. Count Subsequences with Sum = k

function countSubsequences(arr, targetSum) {
    let n = arr.length;

    function helper(index, s) {
        if (index === n) {
            return s === targetSum ? 1 : 0; // Return 1 if sum matches, else 0
        }

        // Pick the current element
        let pick = helper(index + 1, s + arr[index]);

        // Not pick the current element
        let notPick = helper(index + 1, s);

        return pick + notPick; // Total valid subsequences
    }

    return helper(0, 0);
}

// Example usage:
console.log(countSubsequences([1, 2, 3], 3)); 
// Output: 2 (Subsequences: [1,2] and [3])
