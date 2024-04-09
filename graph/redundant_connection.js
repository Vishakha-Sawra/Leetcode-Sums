// Redundant Connection

//edges = [[1,2],[1,3],[2,3]]
// parent = [0, 1, 2, 3]

var findRedundantConnection = function (edges) {
    let parent = new Array(edges.length + 1).fill(0);
    for (let i = 0; i < parent.length; i++) {
        parent[i] = i;
    }
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        let x = find(parent, edge[0]);
        let y = find(parent, edge[1]);
        if (x === y) {
            return edge;
        }
        parent[x] = y;
    }
    return [];
}

function find(parent, i) {
    if (parent[i] === i) {
        return i;
    }
    return find(parent, parent[i]);
}

// Time Complexity: O(n)
// Space Complexity: O(n)
