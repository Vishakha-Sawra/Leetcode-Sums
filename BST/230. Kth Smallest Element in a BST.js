// 230. Kth Smallest Element in a BST

// Iterative Inorder Traversal
var kthSmallest = function (root, k) {
    let stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        k--;
        if (k === 0) return curr.val;
        curr = curr.right;
    }
    return -1;
};

// time complexity: O(n)
// space complexity: O(n)