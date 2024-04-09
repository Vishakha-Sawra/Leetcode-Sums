let timer = 1;

function dfs(node, parent, vis, adj, tin, low, bridges) {
    vis[node] = 1;
    tin[node] = low[node] = timer++;
    for (let it of adj[node]) {
        if (it === parent) continue;
        if (vis[it] === 0) {
            dfs(it, node, vis, adj, tin, low, bridges);
            low[node] = Math.min(low[node], low[it]);
            if (low[it] > tin[node]) {
                bridges.push([it, node]);
            }
        } else {
            low[node] = Math.min(low[node], low[it]);
        }
    }
}


function criticalConnections(n, connections) {
    let adj = Array.from({ length: n }, () => []);
    for (let it of connections) {
        let u = it[0], v = it[1];
        adj[u].push(v);
        adj[v].push(u);
    }
    let vis = Array(n).fill(0);
    let tin = Array(n).fill(0);
    let low = Array(n).fill(0);
    let bridges = [];
    dfs(0, -1, vis, adj, tin, low, bridges);
    return bridges;
}

let n = 4;
let edges = [
    [0, 1], [1, 2],
    [2, 0], [1, 3]
];
let connections = Array.from({ length: n }, () => []);
for (let i = 0; i < n; i++) {
    connections[i].push(edges[i][0]);
    connections[i].push(edges[i][1]);
}

let bridges = criticalConnections(n, connections);

for (let i = 0; i < bridges.length; i++) {
    let u = bridges[i][0];
    let v = bridges[i][1];
    console.log("[" + u + ", " + v + "] ");
}