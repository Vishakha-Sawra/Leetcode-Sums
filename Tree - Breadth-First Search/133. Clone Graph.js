// 133. Clone Graph
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// BFS

var cloneGraph = function(node) {
    if (!node) return null;
    let map = new Map();
    let queue = [node]; // [1]
    let clone = new Node(node.val); // 1
    map.set(node, clone);
    while (queue.length) {
        let current = queue.shift(); // renove the first element from the queue
        for (let neighbor of current.neighbors) { // [2, 4] 
            if (!map.has(neighbor)) { 
                map.set(neighbor, new Node(neighbor.val)); 
                queue.push(neighbor);
            }
            map.get(current).neighbors.push(map.get(neighbor));
        }
    }
    return clone;
}