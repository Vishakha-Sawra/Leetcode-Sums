// 297. Serialize and Deserialize Binary Tree

var serialize = function(root) {
    let res = [];
    dfs(root);      
    return res.join(',');

    function dfs(node) {
        if (!node) {
            res.push('null');
            return;
        }
        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

}

var deserialize = function(data) {
    let nodes = data.split(',');
    return dfs();

    function dfs() {
        let val = nodes.shift();
        if (val === 'null') return null;
        let node = new TreeNode(parseInt(val));
        node.left = dfs();
        node.right = dfs();
        return node;
    }
}

// Time complexity: O(n), where n is the number of nodes in the tree. We process each node once.
// Space complexity: O(n), where n is the number of nodes in the tree. We use the res array to store nodes.

