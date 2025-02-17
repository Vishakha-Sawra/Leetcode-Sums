// 655. Print Binary Tree

// root = [1,2,3,null,4]

var printTree = function(root) {
    let height = getHeight(root); // 3 
    let width = Math.pow(2, height) - 1; // 7 pow(2, 3) - 1 = 7 = 2^3 - 1 = 8 - 1 = 7
    let res = new Array(height).fill(0).map(() => new Array(width).fill(''));
    fill(root, res, 0, 0, width - 1);
    return res;
}

function fill(node, res, i, l, r) {
    if (!node) return;
    res[i][(l + r) >> 1] = '' + node.val; // res[0][3] = 1, res[1][1] = 2, res[1][5] = 3, res[2][0] = 4   
    fill(node.left, res, i + 1, l, (l + r) >> 1); 
    fill(node.right, res, i + 1, ((l + r) >> 1) + 1, r);
}

function getHeight(node) {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.left), getHeight(node.right));
}

// Time complexity: O(n), where n is the number of nodes in the tree. Each node is visited exactly once, and the time complexity is O(n).
// Space complexity: O(n), where n is the number of nodes in the tree. The space complexity is due to the res data structure. In the worst case, the res can contain all the nodes in the tree. Therefore, the space complexity is O(n).