// 1901. Find a Peak Element II

function findMaxRow(mat, col) {
    let max = -1;
    let maxRowIndex = -1;
    for (let i = 0; i < mat.length; i++) {
        if (mat[i][col] > max) {
            max = mat[i][col];
            maxRowIndex = i;
        }
    }
    return maxRowIndex;
};

var findPeakGrid = function (mat) {
    let n = mat.length;
    let m = mat[0].length;
    let low = 0;
    let high = m - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let maxRowIndex = findMaxRow(mat, mid);
        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = mid + 1 < m ? mat[maxRowIndex][mid + 1] : -1;
        if (mat[maxRowIndex][mid] > left && mat[maxRowIndex][mid] > right) {
            return [maxRowIndex, mid];
        } else if (mat[maxRowIndex][mid] < left) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return [-1, -1];
};