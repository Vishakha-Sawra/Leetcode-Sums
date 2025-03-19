function isSafe(row, col, board, n) {
  let dupRow = row;
  let dupCol = col;

  // Check upper diagonal (↖)
  while (row >= 0 && col >= 0) {
    if (board[row][col] === 'Q') return false;
    row--; // why row--? Because we are checking the upper diagonal (upwards) from the current position (row, col) to the top-left corner of the board (0, 0) 
    col--; // why col--? Because we are checking the upper diagonal (upwards) from the current position (row, col) to the top-left corner of the board (0, 0)
  }

  row = dupRow;
  col = dupCol;

  // Check left side (←)
  while (col >= 0) {
    if (board[row][col] === 'Q') return false;
    col--;
  }

  row = dupRow;
  col = dupCol;

  // Check lower diagonal (↙)
  while (row < n && col >= 0) {
    if (board[row][col] === 'Q') return false;
    row++;
    col--;
  }

  return true;
}

function solve(col, board, ans, n) {
  if (col === n) {
    ans.push([...board]); // Store a copy of the board
    return;
  }

  for (let row = 0; row < n; row++) {
    if (isSafe(row, col, board, n)) {
      board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);  
      solve(col + 1, board, ans, n);
      board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
    }
  }
}

function solveNQueens(n) {
  let ans = [];
  let board = new Array(n).fill('.'.repeat(n));
  solve(0, board, ans, n);
  return ans;
}

// Testing the solution
const n = 4;
const solutions = solveNQueens(n);

solutions.forEach((arrangement, index) => {
  console.log(`Arrangement ${index + 1}:`);
  arrangement.forEach(row => console.log(row));
  console.log();
});
