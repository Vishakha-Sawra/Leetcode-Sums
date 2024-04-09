// Binary tree maximum path sum

var maxPathSum = function (root) {
    let max = -Infinity;
    var recur = function (node) {
        if (node == null) return 0;
        let left = Math.max(0, recur(node.left));
        let right = Math.max(0, recur(node.right));
        max = Math.max(left + right + node.val, max);
        return Math.max(left, right) + node.val;
    }
    recur(root)
    return max
};

// time o(n)
// space o(h)