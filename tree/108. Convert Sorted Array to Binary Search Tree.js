// 108. Convert Sorted Array to Binary Search Tree
// nums = [-10,-3,0,5,9]

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) return null;
    return helper(nums, 0, nums.length - 1);
}

function helper(nums, left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);

    return root;
}

// Time complexity: O(n), where n is the number of nodes in the tree.
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the recursive calls in the call stack.