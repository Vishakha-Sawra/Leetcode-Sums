/*
Number of Provinces
isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2
where is i and j pointing to? => i is pointing to the row and j is pointing to the column 
use the example above and point out i and j => i = 0, j = 0, i = 0, j = 1, i = 1, j = 0, i = 1, j = 1, i = 2, j = 0, i = 2, j = 1 
*/

var findCircleNum = function (isConnected) {
    const n = isConnected.length; //n = 3
    const visited = new Array(n).fill(false); //visited = [false, false, false]
    let count = 0;

    const dfs = (i) => { //i = 0, 1, 2
        visited[i] = true;

        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1 && !visited[j]) { //isConnected[0][0] = 1, isConnected[0][1] = 1, isConnected[0][2] = 0, isConnected[1][0] = 1, isConnected[1][1] = 1, isConnected[1][2] = 0, isConnected[2][0] = 0, isConnected[2][1] = 0, isConnected[2][2] = 1
                //why are we checking isConnected[i][j] === 1? => to check if there is a connection between i and j
                //why are we checking !visited[j]? => to check if we have visited j before or not 
                // if there is a connection between i and j and we have not visited j before, then we will visit j and all of its neighbors 
                dfs(j);
            }
        }
    };

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            count++;
        }
    }

    return count;
};
