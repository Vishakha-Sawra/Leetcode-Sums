// 111. Minimum Depth of Binary Tree
// root = [3,9,20,null,null,15,7]
var minDepth = function (root) {
    if (root === null) return 0;
    return helper(root);
}

function helper(root) {
    if (root === null) return Infinity;

    if (root.left === null && root.right === null) return 1;

    return Math.min(helper(root.left), helper(root.right)) + 1;
}



// Approach 2: Iterative

var minDepth = function (root) {
    if (root === null) return 0;

    let queue = [];
    queue.push(root);
    let depth = 1;

    while (queue.length > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            if (node.left === null && node.right === null) return depth;

            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        depth++;
    }

    return depth;
}

// Time complexity: O(n)
// Space complexity: O(n)

// Approach 3: Recursive

var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) return 1;
    let min = Infinity;
    if (root.left) min = Math.min(min, minDepth(root.left));
    if (root.right) min = Math.min(min, minDepth(root.right));
    return min + 1;
}