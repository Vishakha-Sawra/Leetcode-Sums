// 450. Delete Node in a BST
// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]

var deleteNode = function (root, key) {
    if (!root) return null;
    if (root.val === key) { // found the node to delete 
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let current = root.right;
        while (current.left) { // find the leftmost node of the right subtree
            current = current.left;
        }
        current.left = root.left;
        return root.right;
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }
    return root;
};

// 2. Option to choose between predecessor or successor 
var deleteNode = function (root, key) {
    if (!root) return null;
    if (root.val === key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        let predecessor = findMax(root.left);
        if (predecessor !== null) { // Using predecessor
            root.val = predecessor.val;
            root.left = deleteNode(root.left, predecessor.val);
        } else { // Using successor as a fallback
            let successor = findMin(root.right);
            root.val = successor.val;
            root.right = deleteNode(root.right, successor.val);
        }
    } else if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else {
        root.left = deleteNode(root.left, key);
    }
    return root;
};

function findMax(node) {
    while (node.right) node = node.right;
    return node;
}

function findMin(node) {
    while (node.left) node = node.left;
    return node;
}