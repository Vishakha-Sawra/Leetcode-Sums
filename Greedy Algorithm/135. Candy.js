// 135. Candy

// Naive Solution

var candy = function (ratings) {
    let n = ratings.length;
    let left = new Array(n);
    left[0] = 1;
    let right = new Array(n);
    right[n - 1] = 1;
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        } else {
            right[i] = 1;
        }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.max(left[i], right[i])
    }
    return sum;
};

// Time: O(N), Space: O(N)

// Optimized Solution
// ratings = [0, 2, 4, 3, 2, 1, 1, 3, 5, 6, 4, 0, 0]

var candy = function (ratings) {
    let sum = 1;
    let i = 1;

    while (i < ratings.length) {
        if (ratings[i] === ratings[i - 1]) {
            sum++;
            i++;
            continue;
        }
        let peak = 1;
        while (i < ratings.length && ratings[i] > ratings[i - 1]) {
            peak++;
            sum += peak;
            i++;
        }
        let down = 1;
        while (i < ratings.length && ratings[i] < ratings[i - 1]) {
            sum += down;
            down++;
            i++;
        }
        if (down > peak) {
            sum += down - peak;
        }
    }
    return sum;
};