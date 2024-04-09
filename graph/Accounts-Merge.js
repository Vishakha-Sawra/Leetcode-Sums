// Accounts Merge
function DisjointSet(n) {
    const rank = Array(n + 1).fill(0);
    const parent = [...Array(n + 1).keys()];
    const size = Array(n + 1).fill(1);

    function findUPar(node) {
        if (node === parent[node]) {
            return node;
        }
        const ulp = findUPar(parent[node]);
        parent[node] = ulp;
        return parent[node];
    }

    function unionByRank(u, v) {
        const ulp_u = findUPar(u);
        const ulp_v = findUPar(v);
        if (ulp_u === ulp_v) return;
        if (rank[ulp_u] < rank[ulp_v]) {
            parent[ulp_u] = ulp_v;
        } else if (rank[ulp_v] < rank[ulp_u]) {
            parent[ulp_v] = ulp_u;
        } else {
            parent[ulp_v] = ulp_u;
            const rankU = rank[ulp_u];
            rank[ulp_u] = rankU + 1;
        }
    }

    function unionBySize(u, v) {
        const ulp_u = findUPar(u);
        const ulp_v = findUPar(v);
        if (ulp_u === ulp_v) return; // if both the nodes are same then return
        if (size[ulp_u] < size[ulp_v]) {
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        } else {
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v]; // size[ulp_u] = size[ulp_u] + size[ulp_v] 
        }
    }

    return { findUPar, unionByRank, unionBySize };
}

function accountsMerge(accounts) {
    const n = accounts.length;
    const ds = DisjointSet(n);
    const mapMailNode = new Map();

    for (let i = 0; i < n; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const mail = accounts[i][j];
            if (!mapMailNode.has(mail)) {
                mapMailNode.set(mail, i);
            } else {
                ds.unionBySize(i, mapMailNode.get(mail));
            }
        }
    }

    const mergedMail = Array(n).fill().map(() => []);
    mapMailNode.forEach((node, mail) => {
        const root = ds.findUPar(node);
        mergedMail[root].push(mail);
    });

    const ans = [];

    for (let i = 0; i < n; i++) {
        if (mergedMail[i].length === 0) continue;
        mergedMail[i].sort();
        const temp = [accounts[i][0], ...mergedMail[i]];
        ans.push(temp);
    }
    return ans;
}

// Example
// const accounts = [
//     ["John", "j1@com", "j2@com", "j3@com"],
//     ["John", "j4@com"],
//     ["Raj", "r1@com", "r2@com"],
//     ["John", "j1@com", "j5@com"],
//     ["Raj", "r2@com", "r3@com"],
//     ["Mary", "m1@com"]
// ];

// const result = accountsMerge(accounts);

// for (const entry of result) {
//     console.log(entry[0] + ": " + entry.slice(1).join(" "));
// }
