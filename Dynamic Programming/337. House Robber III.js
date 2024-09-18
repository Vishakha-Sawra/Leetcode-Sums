// House Robber III

var rob = function(root) {
    return helper(root)[1]; // what does [1] mean? It means the second element of the array returned by helper(root)    
}

function helper(node) {
    if (!node) return [0, 0];
    const left = helper(node.left);
    const right = helper(node.right);
    const rob = node.val + left[0] + right[0];
    const notRob = Math.max(left[1], left[0]) + Math.max(right[1], right[0]);
    return [notRob, rob];
}

// Time complexity: O(n)
// Space complexity: O(n)
