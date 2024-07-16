// 114. Flatten Binary Tree to Linked List

var flatten = function (root) {
    if (!root) return null;
    let stack = [root];
    let prev = null;
    while (stack.length) {
        let node = stack.pop();
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
        if (prev) {
            prev.right = node;
            prev.left = null;
        }
        prev = node;
    }
};

// Time Complexity: O(N)
// Space Complexity: O(N)