// 94. Binary Tree Inorder Traversal
// root = [1,null,2,3]

var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let cur = root;
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur); 
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }
    return res;
}

// Time complexity: O(n)
// Space complexity: O(n)


// Recursive


var inorderTraversal = function(root) {
    let res = [];
    
    function traverse(node) {
        if (node === null) return;
        traverse(node.left);    // Visit left subtree
        res.push(node.val);     // Visit node itself
        traverse(node.right);   // Visit right subtree
    }
    
    traverse(root);
    return res;
};
