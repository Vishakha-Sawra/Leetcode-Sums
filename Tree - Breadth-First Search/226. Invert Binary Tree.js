// 226. Invert Binary Tree

// 1.  Recursive

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

// 2.  Iterative

var invertTree = function(root) {
    if (!root) return null;
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return root;
}
