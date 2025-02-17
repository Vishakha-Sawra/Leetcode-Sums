// 684. Redundant Connection

var findRedundantConnection = function(edges) {
    const parent = new Array(edges.length + 1).fill(0);
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i;
    }
    
    for (let edge of edges) {
        const [u, v] = edge;
        if (find(parent, u) === find(parent, v)) {
            return edge;
        }
        union(parent, u, v);
    }
    return [];
}
// is this BFS? no it is not BFS but Union Find algorithm which is used to detect cycle in a graph and find the redundant connection in a graph which is a tree with n nodes and n-1 edges. 
function find(parent, x) {
    if (parent[x] !== x) {
        parent[x] = find(parent, parent[x]);
    }
    return parent[x];
}

function union(parent, x, y) {
    parent[find(parent, x)] = find(parent, y);
}

// Time complexity: O(n)
// Space complexity: O(n)

// 2.  BFS

var findRedundantConnection = function(edges) {
    const graph = {};
    for (let edge of edges) {
        const [u, v] = edge;
        if (hasPath(graph, u, v, new Set())) {
            return edge;
        }
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push(v);
        graph[v].push(u);
    }
    return [];
}

function hasPath(graph, src, dest, visited) {
    if (src === dest) return true;
    visited.add(src);
    for (let neighbor of graph[src]) {
        if (visited.has(neighbor)) continue;
        if (hasPath(graph, neighbor, dest, visited)) return true;
    }
    return false;
}

// Time complexity: O(n^2)
// Space complexity: O(n^2)