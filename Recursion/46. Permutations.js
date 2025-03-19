// 46. Permutations

// 1. Using Extra Space

function recurPermute(ds, nums, ans, freq) {
    if (ds.length === nums.length) {
        ans.push([...ds]); // Store a copy of ds
        return;
    }
    for (let i = 0; i < nums.length; i++) {
        if (!freq[i]) {
            ds.push(nums[i]);
            freq[i] = true;
            recurPermute(ds, nums, ans, freq);
            freq[i] = false;
            ds.pop();
        }
    }
}

function permute(nums) {
    let ans = [];
    let ds = [];
    let freq = new Array(nums.length).fill(false);
    recurPermute(ds, nums, ans, freq);
    return ans;
}

// 2. Without Using Extra Space (Backtracking) - Optimized Approach (Swap) 

function recurPermute(nums, ans, start) {
    if (start === nums.length) {
        ans.push([...nums]);
        return;
    }
    for (let i = start; i < nums.length; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        recurPermute(nums, ans, start + 1);
        [nums[start], nums[i]] = [nums[i], nums[start]];
    }
}

function permute(nums) {
    let ans = [];
    recurPermute(nums, ans, 0);
    return ans;
}



//  3. 
function permute(nums) {
    let ans = [];
    
    function recurPermute(index) {
        if (index === nums.length) {
            ans.push([...nums]); // Copy the array and push it to ans
            return;
        }
        for (let i = index; i < nums.length; i++) {
            swap(i, index);
            recurPermute(index + 1);
            swap(i, index); // Backtrack
        }
    }

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // Swap using destructuring
    }

    recurPermute(0);
    return ans;
}