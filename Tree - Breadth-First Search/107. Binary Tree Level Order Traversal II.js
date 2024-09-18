// 107. Binary Tree Level Order Traversal II

var levelOrderBottom = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        let level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.unshift(level); 
    }
    return res;
}

// time complexity: O(n)
// space complexity: O(n)
