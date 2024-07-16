// 98. Validate Binary Search Tree

var isValidBST = function (root) {
    return validate(root, -Infinity, Infinity);
};

function validate(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return validate(node.left, min, node.val) && validate(node.right, node.val, max);
}
