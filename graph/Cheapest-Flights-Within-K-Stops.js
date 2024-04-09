// Cheapest Flights Within K Stops
// flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200],];
// NOT DONE

function cheapestFlight(n, flights, src, dst, K) {
    const adj = new Array(n).fill(null).map(() => []);
    // what does map d0? => it maps each element of the array to a new value using the function provided as an argument to it.
    for (const flight of flights) {
        const [start, end, cost] = flight;
        adj[start].push([end, cost]); // adj[0] = [[1, 100], [2, 100]] 
    }

    const q = [[0, [src, 0]]];
    // q = [[0, [0, 0]]]
    // q = [[0, [1, 100]]]
    // q = [[0, [2, 100]]]
    // q = [[0, [1, 100]], [1, [3, 600]]]
    // q = [[0, [2, 100]], [1, [3, 600]], [1, [3, 200]]]
    // q = [[1, [3, 600]], [1, [3, 200]]]
    // q = [[1, [3, 200]]]
    // q = []

    const dist = new Array(n).fill(Infinity); // dist = [0, Infinity, Infinity, Infinity]
    dist[src] = 0;

    while (q.length > 0) {
        const [stops, [node, cost]] = q.shift(); // what does shift do? => it removes the first element from an array and returns that removed element.
        if (stops > K) continue; // if stops > K, then we don't want to continue with this iteration of the while loop. We want to continue with the next iteration of the while loop. 

        for (const [adjNode, edW] of adj[node]) { // adjNode = 1, edW = 100 // adjNode = 2, edW = 100 // adjNode = 3, edW = 600 // adjNode = 3, edW = 200
            if (cost + edW < dist[adjNode] && stops <= K) {
                dist[adjNode] = cost + edW;
                q.push([stops + 1, [adjNode, cost + edW]]);
            }
        }
    }
    if (dist[dst] === Infinity) return -1;
    return dist[dst];
}


//   EXAMPLE 1:
// Driver Code.
const n = 4, src = 0, dst = 3, K = 1;

const flights = [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200],
];

const ans = cheapestFlight(n, flights, src, dst, K);

console.log(ans);


// time complexity: O(n^k)
// space complexity: O(n + k)