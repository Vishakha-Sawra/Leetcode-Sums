// Longest Increasing Path in a Matrix (HARD)

var longestIncreasingPath = function (matrix) {
    let max = 0;
    let cache = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            max = Math.max(max, dfs(matrix, i, j, cache));
        }
    }
    return max;
}

function dfs(matrix, i, j, cache) {
    if (cache[i][j] !== 0) return cache[i][j];
    let max = 0;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let dir of dirs) {
        let x = i + dir[0];
        let y = j + dir[1];
        if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length || matrix[x][y] <= matrix[i][j]) continue;
        max = Math.max(max, dfs(matrix, x, y, cache));
    }
    cache[i][j] = max + 1;
    return cache[i][j];
}

// ANOTHER SOLUTION
var longestIncreasingPath = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;
    const memo = new Array(rows).fill(null).map(() => new Array(cols).fill(null));
    let maxPath = 0;

    const directions = [
        [0, 1], // right
        [1, 0], // down
        [0, -1], // left
        [-1, 0] // up
    ];

    const dfs = (row, col) => {
        if (memo[row][col] !== null) {
            return memo[row][col];
        }

        let maxChildPath = 0; // what is this? => max path from all children, so what is maxPath for? => max path from all nodes in the matrix (not just children) => maxPath is the final result we want to return (not maxChildPath) => maxChildPath is just a helper variable to help us find maxPath (maxChildPath is not the final result we want to return)

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (
                newRow >= 0 &&
                newRow < rows &&
                newCol >= 0 &&
                newCol < cols &&
                matrix[newRow][newCol] > matrix[row][col]
            ) {
                maxChildPath = Math.max(maxChildPath, dfs(newRow, newCol));
            }
        }

        memo[row][col] = maxChildPath + 1;
        return memo[row][col];
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            maxPath = Math.max(maxPath, dfs(i, j));
        }
    }

    return maxPath;
};


// Time complexity: O(mn)
// Space complexity: O(mn)