// Find Eventual Safe States
// graph = [[1,2],[2,3],[5],[0],[5],[],[]]

var eventualSafeNodes = function (graph) {
    const n = graph.length; // n = 7 
    const colors = new Array(n).fill(0); // 0: not visited, 1: visiting, 2: visited and safe
    // colors = [0, 0, 0, 0, 0, 0, 0]

    const isSafe = (node) => {
        if (colors[node] > 0) {
            return colors[node] === 2;
        }

        colors[node] = 1; // Mark as visiting

        for (const neighbor of graph[node]) {
            if (!isSafe(neighbor)) {
                return false;
            }
        }

        colors[node] = 2; // Mark as visited and safe
        return true;
    };

    const result = [];
    for (let i = 0; i < n; i++) {
        if (isSafe(i)) { // if isSafe(i) returns true, then we want to push i into result.
            result.push(i);
        }
    }

    return result;
};