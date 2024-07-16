// Combination Sum II

function findCombinations(index, arr, target, ans, ds) {
    if (target === 0) {
        ans.push([...ds]);
        return;
    }
    for (let i = index; i < arr.length; i++) {
        if (i > index && arr[i] === arr[i - 1]) continue; // Skip duplicates
        if (arr[i] > target) break; // Since array is sorted, no need to proceed if current value exceeds target
        ds.push(arr[i]);
        findCombinations(i + 1, arr, target - arr[i], ans, ds);
        ds.pop();
    }
}

function combinationSum(candidates, target) {
    let ans = [];
    candidates.sort((a, b) => a - b);
    findCombinations(0, candidates, target, ans, []);
    return ans;
}