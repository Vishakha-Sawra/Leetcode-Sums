// 145. Binary Tree Postorder Traversal

var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    let cur = root;
    let last = null;
    while(cur || stack.length) {
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if(cur.right === null || cur.right === last) {
            res.push(cur.val);
            stack.pop();
            last = cur;
            cur = null;
        } else {
            cur = cur.right;
        }
    }
    return res;
}

// Time complexity: O(n)
// Space complexity: O(n)