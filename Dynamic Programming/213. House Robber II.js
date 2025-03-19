var rob = function (nums) {
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

// 2. Dynamic Programming (Bottom-up)

var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1))); // rob first house or rob last house but not both at the same time 
}

function helper(nums) {
    let n = nums.length;
    let dp = new Array(n + 1).fill(0);
    dp[1] = nums[0];
    for (let i = 1; i < n; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
    }
    return dp[n];
}

// 3. Dynamic Programming (Bottom-up) optimized

var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    return Math.max(helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1)));
}

function helper(nums) {
    let n = nums.length;
    let prevMax = 0;
    let currMax = 0;
    for (let num of nums) {
        let temp = currMax;
        currMax = Math.max(currMax, prevMax + num);
        prevMax = temp;
    }
    return currMax;
}


var rob = function(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    function robRecursive(arr, i) {
        if (i < 0) return 0;
        return Math.max(robRecursive(arr, i - 1), arr[i] + robRecursive(arr, i - 2));
    }

    return Math.max(robRecursive(nums.slice(0, n - 1), n - 2), robRecursive(nums.slice(1), n - 2)); 
};
