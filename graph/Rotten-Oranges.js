// rotten oranges
// grid = [[0,1,2], [0,1,1], [2,1,1]]

var orangesRotting = function(grid) {
    let queue = [];
    let fresh = 0;
    let minutes = 0;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }
    while (queue.length && fresh) {
        let next = [];
        while (queue.length) {
            let current = queue.shift();
            for (let direction of directions) {
                let x = current[0] + direction[0];
                let y = current[1] + direction[1];
                if (x >= 0 && x < grid.length && y >= 0 && y < grid[0].length && grid[x][y] === 1) {
                    grid[x][y] = 2;
                    fresh--;
                    next.push([x, y]);
                }
            }
        }
        queue = next;
        minutes++;
    }
    return fresh ? -1 : minutes;
};


// time complexity: O(n * m)
// space complexity: O(n * m) 
  