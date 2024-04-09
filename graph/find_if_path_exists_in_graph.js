// find_if_path_exists_in_graph

// edges = [[0,1],[1,2],[2,0]]

var validPath = function (n, edges, start, end) {
    let graph = {};
    for (let [a, b] of edges) {
        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    }
    let visited = new Set();
    let queue = [start];
    while (queue.length) {
        let current = queue.shift();
        if (current === end) return true;
        if (visited.has(current)) continue;
        visited.add(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false;
}

graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1]
}