//clone graph

//node = [[2,4],[1,3],[2,4],[1,3]]

var cloneGraph = function (node) {
    if (!node) return null;
    let map = new Map();
    let queue = [node];
    let clone = new Node(node.val);
    map.set(node, clone);
    while (queue.length) {
        let current = queue.shift();
        for (let neighbor of current.neighbors) {
            //what is neighbor here? => neighbor is a node that is a neighbor of the current node that we are visiting. example: if current node is 1, then neighbor is 2 and 4.
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val));
                //so its setting [2, 4]? => yes, it is setting 2 and 4 as keys in the map and their values are new nodes with the same value as the key.
                queue.push(neighbor);
            }
            map.get(current).neighbors.push(map.get(neighbor));
        }
    }
    return clone;
    //what is clone finally at the end? => clone is a node with value 1 and its neighbors are 2 and 4.
    //but we have to return the whole graph => yes, we have to return the whole graph, but we are only returning the clone of the first node. why? because we are only visiting the first node and its neighbors. we are not visiting the neighbors of the neighbors. so we are only returning the clone of the first node.
}

// what is queue here? => queue is an array of nodes that we need to visit and clone their neighbors and add them to the queue to be visited later on and so on.



// DFS
var cloneGraph = function (node, seen = new Map()) {
    const isBaseCase = node === null;
    if (isBaseCase) return null;

    if (seen.has(node)) return seen.get(node);

    return dfs(node, seen);
    //node = 1
    //seen = {1: 1} => seen = {1: 1, 2: 2, 4: 4, 3: 3}
}

const dfs = (node, seen) => {
    const clone = new Node(node.val);

    seen.set(node, clone);
    //seen = {1: 1} => seen = {1: 1, 2: 2, 4: 4, 3: 3}
    for (const neighbor of node.neighbors) {
        // what is node.neighbors here? => node.neighbors is an array of nodes that are neighbors of the current node that we are visiting. example: if current node is 1, then node.neighbors is [2, 4].
        // then what is neighbor here? => neighbor is a node that is a neighbor of the current node that we are visiting. example: if current node is 1, then neighbor is 2 and 4.
        const cloneNeighbor = cloneGraph(neighbor, seen);
        //what is cloneNeighbor here? => cloneNeighbor is a node with the same value as the neighbor node. example: if neighbor node is 2, then cloneNeighbor is a node with value 2.
        // what is cloneGraph(neighbor, seen); here? => cloneGraph(neighbor, seen); is a recursive call to the dfs function. so we are visiting the neighbor node and its neighbors and so on.

        clone.neighbors.push(cloneNeighbor);
        //what is clone.neighbors here? => clone.neighbors is an array of nodes that are neighbors of the current node that we are visiting. example: if current node is 1, then clone.neighbors is [2, 4]. and we are pushing the cloneNeighbor node to the clone.neighbors array.
    }

    return clone;
}
