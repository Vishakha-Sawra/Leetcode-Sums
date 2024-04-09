// Number of ways to arrive at destination leetcode 1976

var countPaths = function(n, roads) {
    const mod = 1e9 + 7; 
    const graph = Array(n).fill(0).map(() => []); // adjacency list
    const dist = Array(n).fill(Infinity); // distance array
    const count = Array(n).fill(0); // count array
    for (let [u, v, w] of roads) {
        graph[u].push([v, w]); // push [node, weight] to the graph array for each node u 
        graph[v].push([u, w]); // push [node, weight] to the graph array for each node v 
    }
    const heap = [[0, 0]]; // [distance, node] min heap
    dist[0] = 0;
    count[0] = 1;
    while (heap.length) {
        const [d, u] = heap.pop(); // pop the node with the minimum distance
        if (d !== dist[u]) continue; // if the distance is not the same as the distance in the distance array, continue
        for (let [v, w] of graph[u]) { // for each neighbor of u 
            const newDist = dist[u] + w; // calculate the new distance 
            if (newDist < dist[v]) { // if the new distance is less than the distance in the distance array
                dist[v] = newDist; // update the distance array
                count[v] = count[u]; // update the count array its a new path
                heap.push([dist[v], v]); // push the new distance and the node to the heap
                heap.sort((a, b) => b[0] - a[0]); // sort in descending order
            } else if (newDist === dist[v]) { // if the new distance is equal to the distance in the distance array
                count[v] = (count[v] + count[u]) % mod; // update the count array by adding the count of the current node
            }
        }
    }
    return count[n - 1];
};