// 130. Surrounded Regions

var solve = function(board) {
    if (!board.length) return;
    let rows = board.length;
    let cols = board[0].length;
    
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') { // left border 
            dfs(board, i, 0);
        }
        if (board[i][cols - 1] === 'O') {  // right border
            dfs(board, i, cols - 1);
        }
    }
    
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') { // top border
            dfs(board, 0, j);
        }
        if (board[rows - 1][j] === 'O') { // bottom border
            dfs(board, rows - 1, j);
        }
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'E') {
                board[i][j] = 'O';
            }
        }
    }
}

function dfs(board, i, j) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== 'O') return;
    
    board[i][j] = 'E';
    
    dfs(board, i + 1, j);
    dfs(board, i - 1, j);
    dfs(board, i, j + 1);
    dfs(board, i, j - 1);
}

// Time complexity: O(m * n)
// Space complexity: O(m * n)



