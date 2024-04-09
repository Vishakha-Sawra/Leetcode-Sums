// Most stones removed with same row or column

function DisjointSet(n) {
    this.rank = Array(n + 1).fill(0);
    this.parent = Array.from({ length: n + 1 }, (_, i) => i);
    this.size = Array(n + 1).fill(1);

    this.findUPar = function (node) {
        if (node === this.parent[node]) {
            return node;
        }
        const ulp = this.findUPar(this.parent[node]);
        this.parent[node] = ulp;
        return this.parent[node];
    };

    this.unionByRank = function (u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);
        if (ulp_u === ulp_v) return;
        if (this.rank[ulp_u] < this.rank[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
        } else if (this.rank[ulp_v] < this.rank[ulp_u]) {
            this.parent[ulp_v] = ulp_u;
        } else {
            this.parent[ulp_v] = ulp_u;
            const rankU = this.rank[ulp_u];
            this.rank[ulp_u] = rankU + 1;
        }
    };

    this.unionBySize = function (u, v) {
        const ulp_u = this.findUPar(u);
        const ulp_v = this.findUPar(v);
        if (ulp_u === ulp_v) return;
        if (this.size[ulp_u] < this.size[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
            this.size[ulp_v] += this.size[ulp_u];
        } else {
            this.parent[ulp_v] = ulp_u;
            this.size[ulp_u] += this.size[ulp_v];
        }
    };
}
// stones = [0,0], [0,2], [1,3], [3,0], [3,2], [4,3]
var removeStones = function(stones) {
    const n = stones.length; // 6
    let maxRow = 0; 
    let maxCol = 0; 
    for (let i = 0; i < n; i++) {  
        maxRow = Math.max(maxRow, stones[i][0]); 
        maxCol = Math.max(maxCol, stones[i][1]); 
    }

    const ds = new DisjointSet(maxRow + maxCol + 1);  // 0, 1, 2, 3, 4, 5, 6, 7, 8
    const stoneNodes = new Map();

    for (let i = 0; i < n; i++) {
        const nodeRow = stones[i][0];
        const nodeCol = stones[i][1] + maxRow + 1; 
        ds.unionBySize(nodeRow, nodeCol); // means that the row and column are connected 
        stoneNodes.set(nodeRow, 1);
        stoneNodes.set(nodeCol, 1); 
    }

    let cnt = 0;
    for (const [key] of stoneNodes) { 
        if (ds.findUPar(key) === key) {
            cnt++; // means that the row or column is not connected to any other row or column
        }
    }

    return n - cnt;
};
