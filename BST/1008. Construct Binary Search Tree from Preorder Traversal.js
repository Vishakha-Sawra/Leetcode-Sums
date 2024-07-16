// 1008. Construct Binary Search Tree from Preorder Traversal
// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]


var bstFromPreorder = function (preorder) {
    let index = { i: 0 };
    return buildBST(preorder, index, Infinity);

    function buildBST(preorder, index, max) {
        if (index.i === preorder.length || preorder[index.i] > max) return null;
        let root = new TreeNode(preorder[index.i]);
        index.i++;
        root.left = buildBST(preorder, index, root.val);
        root.right = buildBST(preorder, index, max);
        return root;
    }
};

// time complexity: O(n)
// space complexity: O(n)
