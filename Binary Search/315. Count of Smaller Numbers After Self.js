// 315. Count of Smaller Numbers After Self
// to do
var countSmaller = function (nums) {
    let sorted = [];
    let result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        let left = 0;
        let right = sorted.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sorted[mid] < nums[i]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        result.unshift(right);
        sorted.splice(right, 0, nums[i]);
    }

    return result;
};

// time: O(nlog(n))
// space: O(n)
