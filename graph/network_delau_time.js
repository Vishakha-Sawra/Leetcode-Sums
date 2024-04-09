// Network Delay Time
// times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
// Output: 2

var networkDelayTime = function (times, N, K) {
    const graph = new Map();
    for (const [u, v, w] of times) {
        if (!graph.has(u)) {
            graph.set(u, []);
        }
        graph.get(u).push([v, w]);
    }
    const distance = new Array(N + 1).fill(Infinity);
    distance[K] = 0;
    const priorityQueue = [[K, 0]]; // [node, time] 
    // k, 0 -> 2, 0 -> 1, 1 -> 3, 1 -> 4, 1 -> 2, 1 -> 3, 1 -> 4 -> 3, 2 -> 4, 2 -> 3 -> 4 -> 4 -> 4 
    while (priorityQueue.length > 0) {
        const [node, time] = priorityQueue.shift();
        if (time > distance[node]) { // 0 > 0, 
            continue;
        }
        if (graph.has(node)) {
            for (const [neighbor, neighborTime] of graph.get(node)) {
                const totalTime = time + neighborTime;
                if (totalTime < distance[neighbor]) {
                    distance[neighbor] = totalTime;
                    priorityQueue.push([neighbor, totalTime]);
                }
            }
        }
    }
    let maxTime = -1;
    for (let i = 1; i <= N; i++) {
        if (distance[i] === Infinity) {
            return -1;
        }
        maxTime = Math.max(maxTime, distance[i]);
    }

    return maxTime;
};
