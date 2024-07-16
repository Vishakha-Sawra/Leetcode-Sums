// 653. Two Sum IV - Input is a BST
// todo
var findTarget = function (root, k) {
    let set = new Set();
    return dfs(root, k, set);
};

function dfs(node, k, set) {
    if (!node) return false;
    if (set.has(k - node.val)) return true;
    set.add(node.val);
    return dfs(node.left, k, set) || dfs(node.right, k, set);
}   