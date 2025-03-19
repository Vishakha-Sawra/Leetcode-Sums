function subsetSumsHelper(ind, sum, arr, N, sumSubset) {
    if (ind === N) {
        sumSubset.push(sum);
        return;
    }

    // Pick the element
    subsetSumsHelper(ind + 1, sum + arr[ind], arr, N, sumSubset);

    // Do not pick the element
    subsetSumsHelper(ind + 1, sum, arr, N, sumSubset);
}

function subsetSums(arr, N) {
    let sumSubset = [];
    subsetSumsHelper(0, 0, arr, N, sumSubset);
    sumSubset.sort((a, b) => a - b);
    return sumSubset;
}

// Driver code
let arr = [3, 1, 2];
let ans = subsetSums(arr, arr.length);
console.log("The sum of each subset is:");
console.log(ans.join(" "));
