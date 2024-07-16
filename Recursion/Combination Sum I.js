// 39. Combination Sum

// candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]

var combinationSum = function (candidates, target) {
    let ans = [];
    findCombinations(0, candidates, target, ans, []);
    return ans;
};

function findCombinations(index, arr, target, ans, ds) {
    if (index === arr.length) {
        if (target === 0) {
            ans.push([...ds]);
        }
        return;
    }
    if (arr[index] <= target) {
        ds.push(arr[index]);
        findCombinations(index, arr, target - arr[index], ans, ds);
        ds.pop();
    }
    findCombinations(index + 1, arr, target, ans, ds);
}