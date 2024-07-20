// Flatten Binary Tree to Linked List

var flatten = function(root) {
    if (!root) return null;

    let stack = [root];
    let prev = null;

    while (stack.length) {
        let node = stack.pop();

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);

        if (prev) {
            prev.right = node;
            prev.left = null;
        }

        prev = node;
    }
}

// Time complexity: O(n)
// Space complexity: O(n)

  
var flatten = function(root) {
    if (!root) return;
  
    let current = root;
  
    while (current) {
      if (current.left) {
        // Find the rightmost node in the left subtree
        let rightmost = current.left;

        while (rightmost.right) {
          rightmost = rightmost.right;
        }
  
        // Reconnect the rightmost node to the current's right node
        rightmost.right = current.right;
  
        // Move the left subtree to the right and nullify the left subtree
        current.right = current.left;
        current.left = null;
      }
  
      // Move to the next node in the pre-order traversal
      current = current.right;
    }
  }
  
// Time complexity: O(n)
// Space complexity: O(1)
  