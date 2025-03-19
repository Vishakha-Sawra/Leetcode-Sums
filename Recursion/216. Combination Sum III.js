// 216. Combination Sum III

function combinationSum3(k, n) {
    let result = [];

    function backtrack(start, k, n, path) {
        if (k === 0 && n === 0) {
            result.push([...path]); // Found a valid combination
            return;
        }

        for (let i = start; i <= 9; i++) {
            if (i > n) break; // Stop if the number is greater than the remaining sum and then go back to the previous number to try another path (Backtrack)
            path.push(i);
            backtrack(i + 1, k - 1, n - i, path);
            path.pop(); // Backtrack
        }
    }

    backtrack(1, k, n, []);
    return result;
}

var combinationSum3 = function (k, n) {
    let result = [];

    function backtrack(start, k, n, path) {
        if (k === 0 && n === 0) {
            result.push([...path]);
            return;
        }

        for (i = start; i <= 9; i++) {
            if (i > n) break;
            path.push(i);
            backtrack(i + 1, k - 1, n - i, path);
            path.pop();
        }
    }

    backtrack(1, k, n, []);
    return result;
};

// Driver code
console.log(combinationSum3(3, 9)); // Output: [[1,2,6], [1,3,5], [2,3,4]] k = 3, n = 9
console.log(combinationSum3(3, 7)); // Output: [[1,2,4]]
