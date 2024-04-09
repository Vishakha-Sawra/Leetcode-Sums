// Unique Binary Search Trees II
// n = 3, return 5 => [1,2,3], [1,3,2], [2,1,3], [3,1,2], [3,2,1]

var generateTrees = function (n) {
    if (n <= 0) return [];
    return generateTreesHelper(1, n);
}

function generateTreesHelper(start, end) {
    const res = [];
    if (start > end) {
        res.push(null);
        return res;
    }

    for (let i = start; i <= end; i++) {
        const left = generateTreesHelper(start, i - 1);
        const right = generateTreesHelper(i + 1, end);
        for (let j = 0; j < left.length; j++) {
            for (let k = 0; k < right.length; k++) {
                const root = new TreeNode(i);
                root.left = left[j];
                root.right = right[k];
                res.push(root);
            }
        }
    }
    return res;
}