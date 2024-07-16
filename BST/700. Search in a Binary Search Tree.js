// 700. Search in a Binary Search Tree

// 1. Recursive Solution:
var searchBST = function (root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    if (root.val > val) return searchBST(root.left, val);
    if (root.val < val) return searchBST(root.right, val);
};

// time complexity: O(logN)
// space complexity: O(1)

// 2. Iterative Solution:

var searchBST = function (root, val) {
    while (root) {
        if (root.val === val) return root;
        if (root.val > val) root = root.left;
        else root = root.right;
    }
    return null;
};

// time complexity: O(logN)
// space complexity: O(1)