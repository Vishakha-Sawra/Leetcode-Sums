// 1011. Capacity To Ship Packages Within D Days

function findDays(weights, cap) {
    let days = 1;
    let load = 0;
    let n = weights.length;
    for (let i = 0; i < n; i++) {
        if (load + weights[i] > cap) {
            days += 1;
            load = weights[i];
        } else {
            load += weights[i];
        }
    }
    return days;
}

function leastWeightCapacity(weights, d) {
    let low = Math.max(...weights);
    let high = weights.reduce((sum, weight) => sum + weight, 0);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let numberOfDays = findDays(weights, mid);
        if (numberOfDays <= d) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

let weights = [5, 4, 5, 2, 3, 4, 5, 6];
let d = 5;
let ans = leastWeightCapacity(weights, d);
console.log("The minimum capacity should be:", ans);

