// 104. Maximum Depth of Binary Tree

// root = [3,9,20,null,null,15,7]
var maxDepth = function (root) {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// Time complexity: O(n), where n is the number of nodes in the tree.
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the recursive calls in the call stack.