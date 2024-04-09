// All paths from source to target

// graph = [[1,2],[3],[3],[]]
var allPathsSourceTarget = function (graph) {
    const result = [];
    const target = graph.length - 1;
    const path = [0];

    function dfs(node) {
        if (node === target) {
            result.push([...path]); // Use the spread operator to create a new array with the current contents of 'path'
            return;
        }

        for (let next of graph[node]) {
            path.push(next);
            dfs(next);
            path.pop(); // Backtrack by removing the last node to explore other paths
        }
    }

    dfs(0);
    return result;
};

