// Find the town judge

var findJudge = function (N, trust) {
    if (N === 1) return 1;
    let trustCount = new Array(N + 1).fill(0);
    // what does fill(0) mean?
    // fill(0) means that the array is filled with 0s.
    for (let [i, j] of trust) {
        trustCount[i]--;
        trustCount[j]++;
    }
    for (let i = 1; i <= N; i++) {
        if (trustCount[i] === N - 1) return i;
    }
    return -1;
}

// time complexity: O(n)
// space complexity: O(n)


// trustCount[i]--; what does this mean?
// trustCount[i]-- means that the person i trusts someone else, so he/she is not a judge.

// [[1,3], [1,4], [2,3], [2,4], [4,3]]
// trustCount = [0, 0, 0, 3, 2]