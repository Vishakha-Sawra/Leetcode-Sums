// 4. Print all subsequence with sum = k

function generateAllSubsequences(arr, targetSum) {
    let n = arr.length;
    let result = [];

    function helper(index, ds, s) {
        if (index === n) {
            if (s === targetSum) {
                result.push([...ds]); // Store a valid subsequence
            }
            return;
        }

        // Pick the current element
        ds.push(arr[index]);
        helper(index + 1, ds, s + arr[index]); // Include element and update sum
        ds.pop(); // Backtrack

        // Not pick the current element
        helper(index + 1, ds, s);
    }

    helper(0, [], 0);
    return result;
}

// Example usage:
console.log(generateAllSubsequences([1, 2, 1], 2)); 
// Output: [ [1, 2], [3] ]