// 701. Insert into a Binary Search Tree

var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val);
    let current = root;
    while (true) {
        if (current.val <= val) { // go right
            if (current.right) {
                current = current.right;
            } else {
                current.right = new TreeNode(val);
                break;
            }
        } else { // go left
            if (current.left) {
                current = current.left;
            } else {
                current.left = new TreeNode(val);
                break;
            }
        }
    }
    return root;
};