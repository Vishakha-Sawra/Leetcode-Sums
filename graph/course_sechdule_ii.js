// cousre sechdule ii
// [[1,0], [2,0], [3,1], [3,2]] => prerequisites
// 0 => 1, 2
// 1 => 3
// 2 => 3
// 3 => []
//order = [0, 2, 1, 3] or [0, 1, 2, 3]
var findOrder = function (numCourses, prerequisites) { //numCourses = 4, prerequisites = [[1,0], [2,0], [3,1], [3,2]]
    //prereq and graph are the same? ... yes
    const graph = buildGraph(numCourses, prerequisites); //graph = [[1,0], [2,0], [3,1], [3,2]]
    const visited = new Array(numCourses).fill(false);  //visited = [false, false, false, false]
    const inStack = new Array(numCourses).fill(false); //inStack = [false, false, false, false]
    const order = [];

    for (let course = 0; course < numCourses; course++) {
        //course = 0, 1, 2, 3
        //numCourses = 4
        if (!visited[course] && hasCycle(course, graph, visited, inStack, order)) {
            return [];
        }
    }

    return order;
}

function buildGraph(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill().map(() => []);

    for (const [src, dst] of prerequisites) { //src = 1, dst = 0, src = 2, dst = 0, src = 3, dst = 1, src = 3, dst = 2
        graph[src].push(dst); //graph[1].push(0), graph[2].push(0), graph[3].push(1), graph[3].push(2)
        //why are we pushing dst into src? => to complete course src, you have to complete course dst first
    }

    return graph;
}

function hasCycle(course, graph, visited, inStack, order) {
    visited[course] = true; //visited[0] = true, visited[1] = true, visited[2] = true, visited[3] = true
    //why are we setting visited[course] to true? => to indicate that we have visited this course
    inStack[course] = true;

    for (const neighbor of graph[course]) {
        //what does neighbor look like? for course 0, neighbor = 1, 2
        if (!visited[neighbor] && hasCycle(neighbor, graph, visited, inStack, order)) {
            return true;
        } else if (inStack[neighbor]) {
            return true;
        }
    }

    inStack[course] = false;
    order.push(course);
    return false;
}

// this is dfs topological sort? yes
// what is the time complexity? O(V + E)
// what is the space complexity? O(V + E)
//what is dfs topological sort? => https://www.youtube.com/watch?v=ddTC4Zovtbc