// Surrounded Regions

var solve = function (board) {
    if (!board || board.length === 0) return;

    const rows = board.length;
    const cols = board[0].length;

    // Mark the 'O's connected to the borders with a special character, say '#'
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') { // board[i][0] = 'O' => board[0][0] = 'O', board[1][0] = 'O', board[2][0] = 'O', board[3][0] = 'O'
            dfs(board, i, 0);
        }
        if (board[i][cols - 1] === 'O') { // board[i][cols - 1] = 'O' => board[0][3] = 'O', board[1][3] = 'O', board[2][3] = 'O', board[3][3] = 'O'
            dfs(board, i, cols - 1);
        }
    }

    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') {
            dfs(board, 0, j);
        }
        if (board[rows - 1][j] === 'O') {
            dfs(board, rows - 1, j);
        }
    }

    // Flip the remaining 'O's to 'X' and revert the special character '#' back to 'O'
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === '#') {
                board[i][j] = 'O';
            }
        }
    }
}

function dfs(board, i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== 'O') {
        return;
        // what are these conditions? i < 0, i >= board.length, j < 0, j >= board[0].length, board[i][j] !== 'O' => true, false, true, false, false
        // why we using these conditions? to check if the current cell is out of bounds or not and if it is not 'O' => to check if the current cell is 'O' or not => if it is not 'O' => return
    }

    board[i][j] = '#'; // Mark current 'O' as visited

    // Explore neighbors in four directions
    dfs(board, i - 1, j); // Up
    dfs(board, i + 1, j); // Down
    dfs(board, i, j - 1); // Left
    dfs(board, i, j + 1); // Right
};