// 101. Symmetric Tree

// Input: root = [1,2,2,3,4,4,3]
// Output: true

var isSymmetric = function (root) {
    return isMirror(root, root);
}

function isMirror(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}

// is this recursive function? => yes it is. Can we use iterative approach? => yes we can. hOw? => using stack. 

// root = [1,2,2,3,4,4,3]

var isSymmetric = function (root) {
    let stack = [];
    stack.push(root);
    stack.push(root);
    while (stack.length > 0) {
        let t1 = stack.pop();
        let t2 = stack.pop();
        if (t1 === null && t2 === null) continue;
        if (t1 === null || t2 === null) return false;
        if (t1.val !== t2.val) return false;
        stack.push(t1.left);
        stack.push(t2.right);
        stack.push(t1.right);
        stack.push(t2.left);
    }
    return true;
};

// Time complexity: O(n), where n is the number of nodes in the tree.
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the recursive calls in the call stack.