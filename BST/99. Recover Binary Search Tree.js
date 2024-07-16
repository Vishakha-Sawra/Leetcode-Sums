// 99. Recover Binary Search Tree
// Input: root = [1,3,null,null,2] 
// Output: [3,1,null,null,2]

var recoverTree = function (root) {
    let first = null;
    let second = null;
    let prev = new TreeNode(-Infinity);
    inorder(root);
    let temp = first.val;
    first.val = second.val;
    second.val = temp;

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        if (first === null && prev.val >= node.val) {
            first = prev;
        }
        if (first !== null && prev.val >= node.val) {
            second = node;
        }
        prev = node;
        inorder(node.right);
    }
};

