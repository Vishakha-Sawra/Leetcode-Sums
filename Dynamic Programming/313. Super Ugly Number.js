// 435. Non-overlapping Intervals
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1

var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;
    intervals.sort((a, b) => a[0] - b[0]); // sort by start time ascending  => [[1,2],[1,3],[2,3],[3,4]]
    const dp = new Array(intervals.length).fill(1); // [1, 1, 1, 1]
    for (let i = 1; i < intervals.length; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[i][0] >= intervals[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return intervals.length - Math.max(...dp);
}