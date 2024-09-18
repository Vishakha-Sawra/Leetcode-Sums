var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    return helper(nums.length, nums);
};

function robLinear(arr) {
    let n = arr.length;
    let prev = arr[0];
    let prev2 = 0;
    for (let i = 1; i < n; i++) {
        let pick = arr[i];
        if (i > 1) pick += prev2;
        let nonPick = 0 + prev;
        let curr_i = Math.max(pick, nonPick);
        prev2 = prev;
        prev = curr_i;
    }
    return prev;
}

function helper(n, nums) {
    let arr1 = [];
    let arr2 = [];
    
    for (let i = 0; i < n; i++) {
        if (i !== 0) arr1.push(nums[i]);
        if (i !== n - 1) arr2.push(nums[i]);
    }
    
    const ans1 = robLinear(arr1);
    const ans2 = robLinear(arr2);
    return Math.max(ans1, ans2);
}
