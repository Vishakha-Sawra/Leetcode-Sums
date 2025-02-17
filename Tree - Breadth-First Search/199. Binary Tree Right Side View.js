// 199. Binary Tree Right Side View

var rightSideView = function (root) {
    if (!root) return []

    let queue = [root];
    const result = [root.val]

    while (queue.length) {
        const next = [];

        for (let node of queue) { // for each node in the queue
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        if (next.length) result.push(next[next.length - 1].val);
        queue = next;
    }
    return result;
}


