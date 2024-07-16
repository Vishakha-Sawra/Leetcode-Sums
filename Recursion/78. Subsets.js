// 78. Subsets

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

var subsets = function (nums) {
    let res = [];
    let subset = [];
    function dfs(i) {
        if (i >= nums.length) {
            res.push([...subset]);
            return;
        }
        subset.push(nums[i]);
        dfs(i + 1);

        subset.pop();
        dfs(i + 1);
    }
    dfs(0);
    return res;
};

// time complexity: O(2^n)
// space complexity: O(n)


var subsets = function (nums) {
    let result = [];
    findSub(0, [], nums, result);
    return result;
};

function findSub(index, currSub, nums, result) {

    if (index === nums.length) {
        result.push([...currSub]);
        return;
    }
    currSub.push(nums[index]);

    findSub(index + 1, currSub, nums, result);

    currSub.pop();

    findSub(index + 1, currSub, nums, result);
}

// Example usage:
let nums = [3, 1, 2];
console.log("All possible subsequences are: ", subsets(nums));

// time complexity: O(2^n)
// space complexity: O(n)


// count the subsequence with sum = k
function countSubsequencesWithSum(arr, k) {
    function helper(index, currentSum) {
        // Base case: If we've processed all elements
        if (index === arr.length) {
            // Check if the current sum is equal to the target sum
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
const array = [1, 2, 3, 4, 5];
const targetSum = 5;
console.log(countSubsequencesWithSum(array, targetSum)); // Output: 3
