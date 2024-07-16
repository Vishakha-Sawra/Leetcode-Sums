// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

var buildTree = function (preorder, inorder) {
    const map = new Map();
    let preIdx = 0;

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }

    function callDFS(start, end) {
        if (end < start) return null;

        const node = new TreeNode(preorder[preIdx]);
        const idx = map.get(preorder[preIdx]);
        preIdx++;

        node.left = callDFS(start, idx - 1);
        node.right = callDFS(idx + 1, end);

        return node;
    }
    return callDFS(0, inorder.length - 1);
};