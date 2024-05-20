// Aggressive Cows
function canWePlace(stalls, dist, cows) {
    const n = stalls.length; // size of array
    let cntCows = 1; // number of cows placed
    let last = stalls[0]; // position of last placed cow
    for (let i = 1; i < n; i++) {
        if (stalls[i] - last >= dist) {
            cntCows++; // place next cow
            last = stalls[i]; // update the last location
        }
        if (cntCows >= cows) return true;
    }
    return false;
}

function aggressiveCows(stalls, k) {
    const n = stalls.length; // size of array
    stalls.sort((a, b) => a - b); // sort the stalls array

    let low = 1, high = stalls[n - 1] - stalls[0];
    // apply binary search
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canWePlace(stalls, mid, k)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
}


