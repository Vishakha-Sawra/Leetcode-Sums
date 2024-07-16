// 95. Unique Binary Search Trees II

// To Do
// n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]

var generateTrees = function (n) {
    if (n === 0) return [];
    return generate(1, n);
};

function generate(start, end) {
    let res = [];
    if (start > end) {
        res.push(null);
        return res;
    }

    for (let i = start; i <= end; i++) {
        let left = generate(start, i - 1);
        let right = generate(i + 1, end);

        for (let leftNode of left) { // this is used to iterate through all the left nodes and right nodes and create a tree with root as i and left and right nodes as left and right nodes respectively and push it to the res array and return it at the end of the function call
            for (let rightNode of right) {
                let root = new TreeNode(i);
                root.left = leftNode;
                root.right = rightNode;
                res.push(root);
            }
        }
    }
    return res;
}