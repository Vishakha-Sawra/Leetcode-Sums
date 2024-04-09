var solve = function(board) {
    if (board.length === 0) return;

    function dfs(row, col, vis, mat, delrow, delcol) {
        vis[row][col] = 1;
        let n = mat.length;
        let m = mat[0].length;

        // check for top, right, bottom, left
        for (let i = 0; i < 4; i++) {
            let nrow = row + delrow[i];
            let ncol = col + delcol[i];
            // check for valid coordinates and unvisited Os
            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m && vis[nrow][ncol] === 0 && mat[nrow][ncol] === 'O') {
                dfs(nrow, ncol, vis, mat, delrow, delcol);
            }
        }
    }

    function fill(n, m, mat) {
        let delrow = [-1, 0, 1, 0]; // top, right, bottom, left
        let delcol = [0, 1, 0, -1]; // what does this do? => it's used to traverse the 4 directions from a cell (top, right, bottom, left) 
        let vis = new Array(n).fill(0).map(() => new Array(m).fill(0));

        // traverse first row and last row
        for (let j = 0; j < m; j++) {
            // check for unvisited Os in the boundary rows
            // first row
            if (vis[0][j] === 0 && mat[0][j] === 'O') {
                dfs(0, j, vis, mat, delrow, delcol);
            }

            // last row
            if (vis[n - 1][j] === 0 && mat[n - 1][j] === 'O') {
                dfs(n - 1, j, vis, mat, delrow, delcol);
            }
        }

        for (let i = 0; i < n; i++) {
            // check for unvisited Os in the boundary columns
            // first column
            if (vis[i][0] === 0 && mat[i][0] === 'O') {
                dfs(i, 0, vis, mat, delrow, delcol);
            }

            // last column
            if (vis[i][m - 1] === 0 && mat[i][m - 1] === 'O') {
                dfs(i, m - 1, vis, mat, delrow, delcol);
            }
        }

        // if unvisited O then convert to X
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (vis[i][j] === 0 && mat[i][j] === 'O') {
                    mat[i][j] = 'X';
                }
            }
        }

        return mat;
    }

    fill(board.length, board[0].length, board); // fill the boundary Os with X and the surrounded Os with X as well 
};

// Example usage:
var inputBoard = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
    ['X', 'X', 'O', 'O']
];

solve(inputBoard);

for (let i = 0; i < inputBoard.length; i++) {
    console.log(inputBoard[i].join(' '));
}
