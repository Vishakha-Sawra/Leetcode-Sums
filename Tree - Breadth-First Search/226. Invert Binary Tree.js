// 226. Invert Binary Tree

var invertTree = function(root) {
    if (!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}

// Time complexity: O(n)
// Space complexity: O(n)
