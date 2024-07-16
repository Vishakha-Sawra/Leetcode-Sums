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


// 2. Print Just One Subsequence Using a Function

function printOneSubsequence(arr) {
    function helper(index, subsequence) {
        if (index === arr.length) {
            console.log(subsequence);
            return true;  // Found one subsequence, stop further recursion
        }
        // Include the current element
        subsequence.push(arr[index]);
        if (helper(index + 1, subsequence)) {
            return true;  // Stop further recursion
        }
        // Exclude the current element
        subsequence.pop();
        if (helper(index + 1, subsequence)) {
            return true;  // Stop further recursion
        }
        return false;
    }

    helper(0, []);
}

// Example usage:
const array2 = [1, 2, 3];
printOneSubsequence(array2);
// Output: [1, 2, 3] (or any other valid subsequence)

// 3. Count Subsequences with Sum = k

function countSubsequencesWithSum(arr, k) {
    function helper(index, currentSum) {
        if (index === arr.length) {
            return currentSum === k ? 1 : 0;
        }
        // Include the current element in the sum
        const include = helper(index + 1, currentSum + arr[index]);
        // Exclude the current element from the sum
        const exclude = helper(index + 1, currentSum);
        // Return the sum of both cases
        return include + exclude;
    }

    // Start the recursion from index 0 and initial sum 0
    return helper(0, 0);
}

// Example usage:
const array3 = [1, 2, 3, 4, 5];
const targetSum = 5;
console.log(countSubsequencesWithSum(array3, targetSum)); // Output: 3 (subsequences: [2, 3], [1, 4], [5])
