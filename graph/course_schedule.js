// Course Schedule

function canFinish(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites); // graph = [[0,1], [0,2], [1,3], [1,4], [3,4]]
    const visited = new Array(numCourses).fill(false); //visited = [false, false, false, false] 
    const inStack = new Array(numCourses).fill(false); //inStack = [false, false, false, false]

    for (let course = 0; course < numCourses; course++) {
        if (!visited[course] && hasCycle(course, graph, visited, inStack)) { //hasCycle(0, graph, visited, inStack)
            //what does !visted[course] mean? => if course has not been visited
            //what does hasCycle(0, graph, visited, inStack) mean? => if course has a cycle
            return false; // Cycle detected, cannot finish all courses
        }
    }

    return true; // No cycles found, can finish all courses
}

function buildGraph(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill().map(() => []); //fill graph array with empty arrays

    for (const [src, dst] of prerequisites) {
        graph[src].push(dst);
    }

    // what does src and dst look like?
    // src = 0, dst = 1
    // that means to complete course 0, you have to complete course 1 first

    return graph;
    //what does graph look like?
    //graph = [[0,1], [0,2], [1,3], [1,4], [3,4]]
}

function hasCycle(course, graph, visited, inStack) {
    visited[course] = true;
    inStack[course] = true;

    for (const neighbor of graph[course]) {
        //what does neighbor look like? for course 0, neighbor = 1, 2
        if (!visited[neighbor] && hasCycle(neighbor, graph, visited, inStack)) {
            return true; // Cycle detected
        } else if (inStack[neighbor]) {
            return true; // Neighbor is in the current recursion stack, cycle detected
        }
    }

    inStack[course] = false;
    return false; // No cycle found
}
