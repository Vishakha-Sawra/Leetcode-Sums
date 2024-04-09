// 01 matrix

var updateMatrix = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const queue = [];
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                queue.push([i, j]);
            } else {
                matrix[i][j] = Infinity;
            }
        }
    }

    while (queue.length) { // till its
        const [i, j] = queue.shift();
        for (const [x, y] of dirs) {
            const r = i + x;
            const c = j + y;
            if (r < 0 || c < 0 || r >= m || c >= n || matrix[r][c] <= matrix[i][j] + 1) continue;
            matrix[r][c] = matrix[i][j] + 1;
            queue.push([r, c]);
        }
    }

    return matrix;
};