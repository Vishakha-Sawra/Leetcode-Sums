// 435. Non-overlapping Intervals
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            continue;
        }
        end = intervals[i][1];
        count++;
    }
    return intervals.length - count;
};

// Time complexity: O(nlogn)
// Space complexity: O(1)