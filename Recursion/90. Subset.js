function printAns(ans) {
    console.log("The unique subsets are:");
    console.log(ans.join("\n"));
}

function fun(nums, index, ds, res) {
    if (index === nums.length) {
        let sortedSubset = [...ds].sort((a, b) => a - b).toString();
        res.add(sortedSubset);
        return;
    }

    // Pick the element
    ds.push(nums[index]);
    fun(nums, index + 1, ds, res);

    // Do not pick the element
    ds.pop();
    fun(nums, index + 1, ds, res);
}

function subsetsWithDup(nums) {
    let ans = [];
    let res = new Set();
    let ds = [];
    
    fun(nums, 0, ds, res);
    
    res.forEach(subset => ans.push(subset));
    return ans;
}

// 2. Optimized approach
// The above approach is inefficient because it generates all possible subsets and then removes duplicates.     
// We can avoid generating duplicates in the first place by sorting the input array and skipping duplicates.


function printAns(ans) {
    console.log("The unique subsets are:");
    ans.forEach(subset => console.log(subset));
}

function findSubsets(ind, nums, ds, ansList) {
    ansList.push([...ds]); // Add a copy of the current subset

    for (let i = ind; i < nums.length; i++) {
        if (i !== ind && nums[i] === nums[i - 1]) continue; // Skip duplicates
        ds.push(nums[i]);
        findSubsets(i + 1, nums, ds, ansList);
        ds.pop(); // Backtrack
    }
}

function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b); // Sort to handle duplicates
    let ansList = [];
    findSubsets(0, nums, [], ansList);
    return ansList;
}

// Driver code
let nums = [1, 2, 2];
let ans = subsetsWithDup(nums);
printAns(ans);
