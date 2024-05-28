// 56. Merge Intervals

// Brute Force Approach:

function merge(intervals) {
    const n = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);

    const res = [];

    for (let i = 0; i < n; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (res.length && end <= res[res.length - 1][1]) {
            continue;
        }

        for (let j = i + 1; j < n; j++) {
            if (intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1]);
            } else {
                break;
            }
        }
        res.push([start, end]);
    }
    return res;
}


// Optimized Approach:

var merge = function (intervals) {
    const n = intervals.length;

    intervals.sort((a, b) => a[0] - b[0]);

    const res = [intervals[0]];

    for (let i = 1; i < n; i++) {
        const last = res[res.length - 1];
        const curr = intervals[i];

        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        }
        else {
            res.push(curr);
        }
    }
    return res;
};