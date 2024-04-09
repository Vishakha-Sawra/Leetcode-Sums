// Find the City With the Smallest Number of Neighbors at a Threshold Distance
// n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4

var findTheCity = function (n, edges, distanceThreshold) {
    const dist = new Array(n).fill(0).map(() => new Array(n).fill(Infinity));
    for (const [u, v, w] of edges) {
        dist[u][v] = dist[v][u] = w;
    }

    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    // what will be the last iteration matrix? => [[0, 3, 4, 5], [3, 0, 1, 2], [4, 1, 0, 1], [5, 2, 1, 0]]  

    let min = Infinity;
    let result = -1;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (dist[i][j] <= distanceThreshold) {
                count++;
            }
        }
        // count = 3
        if (count <= min) {
            min = count;
            result = i;
        }
    }

    return result;
};

// Time complexity: O(n^3)
