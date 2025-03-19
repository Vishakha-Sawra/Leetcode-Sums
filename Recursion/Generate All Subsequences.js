// 1. Generate All Subsequences

function generateAllSubsequences(arr) {
    let result = [];

    function helper(index, subsequence) {
        if (index === arr.length) {
            result.push([...subsequence]);
            return;
        }
        // Include the current element
        subsequence.push(arr[index]);
        helper(index + 1, subsequence);
        // Exclude the current element
        subsequence.pop();
        helper(index + 1, subsequence);
    }

    helper(0, []);
    return result;
}

// Example usage:
const array1 = [1, 2, 3];
console.log(generateAllSubsequences(array1));
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]


