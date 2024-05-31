// 57. Insert Interval

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]

var insert = function (intervals, newInterval) {
    let ans = [];
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) { // Add all intervals that are before newInterval
        ans.push(intervals[i]);
        i++;
    }
    let intervalStart = newInterval[0];
    let intervalEnd = newInterval[1];
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) { // Merge all intervals that overlap with newInterval and update intervalStart and intervalEnd accordingly 
        intervalStart = Math.min(intervalStart, intervals[i][0]);
        intervalEnd = Math.max(intervalEnd, intervals[i][1]);
        i++;
    }
    ans.push([intervalStart, intervalEnd]);
    while (i < intervals.length) { // Add all intervals that are after newInterval 
        ans.push(intervals[i]);
        i++;
    }
    return ans;
}