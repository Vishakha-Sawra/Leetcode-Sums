// 112. Path Sum

var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    return helper(root, targetSum);
}

function helper(root, targetSum) {
    if (root === null) return false;

    if (root.left === null && root.right === null && targetSum - root.val === 0) return true;

    return helper(root.left, targetSum - root.val) || helper(root.right, targetSum - root.val);
}

// Time complexity: O(n)
// Space complexity: O(n)

// Approach 2: Iterative

var hasPathSum = function(root, targetSum) {
    if (root === null) return false;

    let stack = [];
    stack.push([root, targetSum]);

    while (stack.length > 0) {
        let [node, sum] = stack.pop(); 

        if (node.left === null && node.right === null && sum - node.val === 0) return true;

        if (node.left !== null) stack.push([node.left, sum - node.val]);
        if (node.right !== null) stack.push([node.right, sum - node.val]);
    }

    return false;
}

// Time complexity: O(n)
// Space complexity: O(n)
