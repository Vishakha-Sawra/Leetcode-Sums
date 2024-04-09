// Sum of Distances in Tree
// NOT DONE

var sumOfDistancesInTree = function (N, edges) {
    let graph = {};
    for (let i = 0; i < N; i++) {
        graph[i] = [];
    }
    for (let edge of edges) {
        let [from, to] = edge;
        graph[from].push(to);
        graph[to].push(from);
    }
    let count = new Array(N).fill(1);
    let res = new Array(N).fill(0);
    let dfs = (node, parent) => {
        for (let child of graph[node]) {
            if (child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
            res[node] += res[child] + count[child];
        }
    };
    let dfs2 = (node, parent) => {
        for (let child of graph[node]) {
            if (child === parent) continue;
            res[child] = res[node] - count[child] + N - count[child];
            dfs2(child, node);
        }
    };
    dfs(0, -1);
    dfs2(0, -1);
    return res;
};
