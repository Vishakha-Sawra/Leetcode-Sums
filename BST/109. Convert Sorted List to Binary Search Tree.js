// 109. Convert Sorted List to Binary Search Tree

// head = [-10, -3, 0, 5, 9]

var sortedListToBST = function (head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return helper(arr, 0, arr.length - 1);
};

function helper(arr, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(arr[mid]);
    root.left = helper(arr, start, mid - 1);
    root.right = helper(arr, mid + 1, end);
    return root;
}

