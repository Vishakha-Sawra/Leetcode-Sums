// 875. Koko Eating Bananas

var minEatingSpeed = function (piles, H) {
    let left = 1, right = Math.max(...piles);
    while (left < right) {
        let mid = left + ((right - left) >> 1);
        let time = 0;
        for (let pile of piles) {
            time += Math.ceil(pile / mid);
        }
        if (time > H) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};




function findMax(v) {
    let maxi = -Infinity;
    let n = v.length;
    // Find the maximum
    for (let i = 0; i < n; i++) {
        maxi = Math.max(maxi, v[i]);
    }
    return maxi;
}

function calculateTotalHours(v, hourly) {
    let totalH = 0;
    let n = v.length;
    // Find total hours
    for (let i = 0; i < n; i++) {
        totalH += Math.ceil(v[i] / hourly);
    }
    return totalH;
}

function minimumRateToEatBananas(v, h) {
    let low = 1;
    let high = findMax(v);

    // Apply binary search
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let totalH = calculateTotalHours(v, mid);
        if (totalH <= h) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}


