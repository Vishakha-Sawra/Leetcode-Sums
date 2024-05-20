// same tree 

var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Time complexity: O(n), where n is the number of nodes in the tree.
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the recursive calls in the call stack.
