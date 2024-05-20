// Upper bound and lower bound

// Lower bound

var lowerBound = function (arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

// Upper bound

var upperBound = function (arr, target) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};