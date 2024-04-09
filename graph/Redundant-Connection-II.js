// Redundant Connection II
// NOT DONE
var findRedundantDirectedConnection = function (edges) {
    let n = edges.length;
    let parent = new Array(n + 1).fill(0);
    let first = -1;
    let second = -1;
    let last = -1;
    for (let i = 0; i < n; i++) {
        let [u, v] = edges[i];
        if (parent[v] !== 0) {
            first = parent[v];
            second = i;
            continue;
        }
        parent[v] = i + 1;
        let pu = find(parent, u);
        if (pu === v) {
            last = i;
        } else {
            parent[v] = pu;
        }
    }
    if (first < 0) {
        return edges[last];
    } else {
        let edge = edges[second];
        if (last >= 0) {
            edge = edges[first];
        }
        return edge;
    }
}

function find(parent, x) {
    if (parent[x] === x || parent[x] === 0) {
        return x;
    }
    return find(parent, parent[x]);
}

// time complexity: O(n)
// space complexity: O(n)