// 103. Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root];
    let level = 0;
    while (queue.length) {
        let len = queue.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (level % 2 === 0) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(temp);
        level++;
    }
    return res;
} 

// Time complexity: O(n), where n is the number of nodes in the tree.
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the queue data structure. In the worst case, the queue can contain all the nodes in a single level of the binary tree. For a full binary tree, the leaf nodes would be n/2, where n is the total number of nodes. Therefore, the space complexity is O(n/2) = O(n). 
