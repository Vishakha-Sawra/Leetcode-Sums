// 637. Average of Levels in Binary Tree

var averageOfLevels = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(sum / size);
    }
    return result;
}
