// 102. Binary Tree Level Order Traversal

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [root]; // [3]
    while (queue.length) { 
        let len = queue.length;
        let temp = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift(); // remove the first element from the queue
            temp.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(temp);
    }
    return res;
}

// Time complexity: O(n), where n is the number of nodes in the tree. Each node is visited exactly once, and the time complexity is O(n). 
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the queue data structure. In the worst case, the queue can contain all the nodes in a single level of the binary tree. For a full binary tree, the leaf nodes would be n/2, where n is the total number of nodes. Therefore, the space complexity is O(n/2) = O(n). 