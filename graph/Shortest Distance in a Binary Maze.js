// Input:
// grid[][] = {{1, 1, 1, 1},
//             {1, 1, 0, 1},
//             {1, 1, 1, 1},
//             {1, 1, 0, 0},
//             {1, 0, 0, 1}}
// source = {0, 1}
// destination = {2, 2}
// Output:
// 3
// letcode 505
function shortestPath(grid, source, destination) {
    if (source[0] === destination[0] && source[1] === destination[1]) {
        return 0;
    }

    const queue = [];
    const n = grid.length; // row = 5    
    const m = grid[0].length; // column = 5 

    const dist = new Array(n).fill(null).map(() => new Array(m).fill(Infinity));
    dist[source[0]][source[1]] = 0;
    queue.push([0, source[0], source[1]]);

    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    while (queue.length > 0) {
        const [dis, r, c] = queue.shift();

        for (let i = 0; i < 4; i++) {
            const newr = r + dr[i];
            const newc = c + dc[i];

            if ( newr >= 0 && newr < n && newc >= 0 && newc < m && grid[newr][newc] === 1 && dis + 1 < dist[newr][newc]) {
                dist[newr][newc] = 1 + dis;
                if (newr === destination[0] && newc === destination[1]) {
                    return dis + 1;
                }
                queue.push([1 + dis, newr, newc]);
            }
        }
    }
    return -1;
}

