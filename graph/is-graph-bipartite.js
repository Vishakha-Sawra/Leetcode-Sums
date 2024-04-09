// Is Graph Bipartite?
// graph = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]

var isBipartite = function (graph) {

    const colors = new Array(graph.length).fill(0);
    // colors = [0, 0, 0, 0]
    const queue = [];

    for (let i = 0; i < graph.length; i++) {
        if (colors[i] !== 0) continue;
        // what is i here? i = 0, 1, 2, 3 like full array at 0th index, 1st index, 2nd index, 3rd index? => yes
        queue.push(i);
        // final what is queue? queue = [0, 1, 2, 3]
        colors[i] = 1;

        while (queue.length > 0) {
            const currentNode = queue.shift(); // currentNode = 0, 1, 2, 3

            for (const neighbor of graph[currentNode]) {
                if (colors[neighbor] === colors[currentNode]) {
                    return false;
                } // if colors[1] === colors[0] => false
                // 1 === 1 => false

                if (colors[neighbor] === 0) {
                    colors[neighbor] = -colors[currentNode];
                    // colors[1] = -colors[0] => colors[1] = -1
                    queue.push(neighbor);
                    // queue = [1]
                    // colors[2] = -colors[1] => colors[2] = 1
                    // queue = [1, 2]
                }
            }
        }
    }

    return true;
};


// dfs
var isBipartite = function (graph) {
    const colors = new Array(graph.length).fill(0);

    function dfs(node, color) {
        colors[node] = color;

        for (const neighbor of graph[node]) {
            if (colors[neighbor] === color) {
                return false;
            }

            if (colors[neighbor] === 0 && !dfs(neighbor, -color)) {
                return false;
            }
        }

        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        if (colors[i] === 0 && !dfs(i, 1)) {
            return false;
        }
    }

    return true;
};