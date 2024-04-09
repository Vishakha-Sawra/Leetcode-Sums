// Number of Operations to Make Network Connected
//  connections = [[1,2],[2,3],[4,5],[6,7],[5,6], [3,7]]
function DisjointSet(n) {
    const rank = Array(n + 1).fill(0); // 
    const parent = Array.from({ length: n + 1 }, (_, i) => i);
    const size = Array(n + 1).fill(1);

    function findUPar(node) { // node = 3
        if (node === parent[node]) { // 3 === 3 
            return node;
        }
        const ulp = findUPar(parent[node]);  // ulp = findUPar(2) = 1  ulp = 1 
        parent[node] = ulp;// parent[2] = 1
        return parent[node]; // 1
    }

    function unionByRank(u, v) {
        const ulp_u = findUPar(u); // ulp_u = 1 = findUPar(2) = 1 
        const ulp_v = findUPar(v); // ulp_v = 3 
        if (ulp_u === ulp_v) return; // 1 === 3 no return 
        if (rank[ulp_u] < rank[ulp_v]) { // rank[1] = 0 < rank[2] = 0 no return
            parent[ulp_u] = ulp_v;
        } else if (rank[ulp_v] < rank[ulp_u]) { // rank[2] = 0 < rank[1] = 0 no return
            parent[ulp_v] = ulp_u;
        } else { // rank[1] = 0 === rank[2] = 0
            parent[ulp_v] = ulp_u; // parent[2] = 1
            rank[ulp_u]++; // rank[1] = 1
        }
    }

    function unionBySize(u, v) {
        const ulp_u = findUPar(u);
        const ulp_v = findUPar(v);
        if (ulp_u === ulp_v) return;
        if (size[ulp_u] < size[ulp_v]) {
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        } else {
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v];
        }
    }

    return {
        findUPar,
        unionByRank,
        unionBySize,
    };
}

// n = 4, connections = [[0,1],[0,2],[1,2]]
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) { // 3 < 4 - 1 = 3 3 ==== 3
        return -1; // Not enough connections to connect all nodes
    }

    const ds = DisjointSet(n); // ds = DisjointSet(4) = {findUPar, unionByRank, unionBySize} // what does this mean = it is a function that returns an object with 3 functions 
    let cntExtras = 0;

    for (let i = 0; i < connections.length; i++) {
        const u = connections[i][0]; // u = connections[0][0] = 0
        const v = connections[i][1]; // v = connections[0][1] = 1
        if (ds.findUPar(u) === ds.findUPar(v)) { // findUPar(0) = 0 === findUPar(1) = 1
            cntExtras++;
        } else {
            ds.unionBySize(u, v);
        }
    }

    let cntC = 0;
    for (let i = 0; i < n; i++) {
        if (ds.findUPar(i) === i) cntC++;
    }

    const ans = cntC - 1;
    return Math.min(ans, cntExtras);
};

// Example usage:
const n = 9;
const connections = [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [2, 3],
    [4, 5], [5, 6],
    [7, 8]
];

const result = makeConnected(n, connections);
console.log("The number of operations needed: " + result);

// Time complexity: O(n + e)
// Space complexity: O(n + e)
