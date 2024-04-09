// Minimum Path Sum

// Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
// Output: 7
function minPathSum(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    const minSum = new Array(cols).fill(0);

    minSum[0] = grid[0][0];

    for (let i = 1; i < cols; i++) {
        minSum[i] = minSum[i - 1] + grid[0][i];
    }

    for (let row = 1; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (col === 0) {
                minSum[col] += grid[row][col];
            } else {
                minSum[col] = Math.min(minSum[col - 1], minSum[col]) + grid[row][col];
            }
        }
    }

    return minSum[cols - 1];
}
