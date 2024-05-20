// 1423. Maximum Points You Can Obtain from Cards
// carPoints = [1,2,3,4,5,6,1], k = 3;
// output 12 => take cards from last/right => 1+6+5 = 12; took 3 cards; 1, 6, 5  = 12

var maxScore = function (cardPoints, k) {
    let lsum = 0;
    let rsum = 0;
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        lsum = lsum + cardPoints[i];
        maxSum = lsum;
    }
    let rIndex = cardPoints.length - 1;
    for (let i = k - 1; i >= 0; i--) {
        lsum = lsum - cardPoints[i];
        rsum = rsum + cardPoints[rIndex];
        rIndex = rIndex - 1;
        maxSum = Math.max(maxSum, lsum + rsum);
    }
    return maxSum;
}

// Time complexity: O(n)
// Space complexity: O(1)


