// 1423. Maximum Points You Can Obtain from Cards

var maxScore = function(cardPoints, k) {
    let n = cardPoints.length;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
    }
    let max = sum;
    for (let i = 0; i < k; i++) {
        sum += cardPoints[n - 1 - i] - cardPoints[k - 1 - i]; // Sliding window technique to find the minimum sum of k elements in the array and subtract it from the total sum of k elements from the start of the array to get the maximum sum of k elements from the array. 
        max = Math.max(max, sum);
    }
    return max;
}

// Time complexity: O(k) 
// Space complexity: O(1)


var maxScore = function (cardPoints, k) {
    let leftSum = 0, rightSum = 0, maxSum = 0;
    for (i = 0; i < k; i++) {
        leftSum = leftSum + cardPoints[i];
        maxSum = leftSum;
    }
    let rightIndex = cardPoints.length - 1;
    for (let i = k - 1; i >= 0; i--) {
        leftSum = leftSum - cardPoints[i];
        rightSum = rightSum + cardPoints[rightIndex];
        rightIndex--
        maxSum = Math.max(maxSum, leftSum + rightSum);
    }
    return maxSum;
}
