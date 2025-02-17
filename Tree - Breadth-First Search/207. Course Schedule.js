// 207. Course Schedule

var canFinish = function(numCourses, prerequisites) {
    let graph = new Map();
    let inDegree = new Array(numCourses).fill(0);
    let queue = [];
    let count = 0;
    
    for (let [course, pre] of prerequisites) {
        if (!graph.has(pre)) {
            graph.set(pre, []);
        }
        graph.get(pre).push(course);
        inDegree[course]++;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    while (queue.length > 0) {
        let course = queue.shift();
        count++;
        if (graph.has(course)) {
            for (let nextCourse of graph.get(course)) {
                inDegree[nextCourse]--;
                if (inDegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }
    }
    
    return count === numCourses;
}

// Time complexity: O(V + E)
// Space complexity: O(V + E)

// V: number of courses
// E: number of prerequisites

