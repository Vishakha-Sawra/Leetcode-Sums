// Making A Large Island

var largestIsland = function (grid) {
    let n = grid.length; // number of rows
    let m = grid[0].length;
    let max = 0;
    let color = 2;
    let map = {};
    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // right, left, down, up

    for (let i = 0; i < n; i++) { // i = row
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                let count = dfs(i, j, color);
                max = Math.max(max, count);
                map[color] = count;
                color++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 0) {
                let count = 1;
                let set = new Set();
                for (let d of dir) {
                    let x = i + d[0];
                    let y = j + d[1];
                    if (x >= 0 && y >= 0 && x < n && y < m && grid[x][y] != 0) {
                        set.add(grid[x][y]);
                    }
                }
                for (let c of set) {
                    count += map[c];
                }
                max = Math.max(max, count);
            }
        }
    }

    return max;

    function dfs(i, j, color) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] != 1) {
            return 0;
        }
        grid[i][j] = color;
        let count = 1;
        for (let d of dir) {
            let x = i + d[0]; // x = 0 + 1 = 1
            let y = j + d[1]; // y = 0 + 0 = 0
            count += dfs(x, y, color); // count = 1 + dfs(1, 0, 2) count = 1 + 1 = 2
        }
        return count;
    }
};