// 110. Balanced Binary Tree
// Input: root = [3,9,20,null,null,15,7] 
// Output: true

var isBalanced = function (root) {
    return getHeight(root) !== -1;
}

function getHeight(root) {
    if (root === null) return 0;

    const leftHeight = getHeight(root.left);
    if (leftHeight === -1) return -1;

    const rightHeight = getHeight(root.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
}

