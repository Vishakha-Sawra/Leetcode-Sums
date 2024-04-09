// Russian Doll Envelopes
// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// Output: 3

var maxEnvelopes = function (envelopes) {
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let len = envelopes.length, dp = []
    for (let i = 0; i < len; i++) {
        let height = envelopes[i][1], left = 0, right = dp.length
        while (left < right) {
            let mid = Math.floor((left + right) / 2)
            if (dp[mid] < height) left = mid + 1
            else right = mid
        }
        dp[left] = height
    }
    return dp.length
};