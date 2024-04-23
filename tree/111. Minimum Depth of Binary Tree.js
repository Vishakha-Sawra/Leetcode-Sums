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
