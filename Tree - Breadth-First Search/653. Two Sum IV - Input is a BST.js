// 653. Two Sum IV - Input is a BST

var findTarget = function(root, k) {
    let set = new Set();
    let queue = [root]; 
    while (queue.length > 0) {
        let node = queue.shift();
        if (set.has(k - node.val)) {
            return true;
        }
        set.add(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return false;
}

// Time complexity: O(n), where n is the number of nodes in the tree. Each node is visited exactly once, and the time complexity is O(n).
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the queue data structure. In the worst case, the queue can contain all the nodes in a single level of the binary tree. For a full binary tree, the leaf nodes would be n/2, where n is the total number of nodes. Therefore, the space complexity is O(n/2) = O(n).