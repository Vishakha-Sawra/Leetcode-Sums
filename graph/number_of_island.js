// Number Of Island

// grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]

var numIslands = function (grid) {
    let count = 0;
    let row = grid.length;
    let col = grid[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count; // count = number of islands =  1
}

function dfs(grid, i, j) {
    let row = grid.length;
    let col = grid[0].length;

    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0') return;

    grid[i][j] = '0'; //mark the current cell as visited
    dfs(grid, i + 1, j); //explore the 4 directions
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}

