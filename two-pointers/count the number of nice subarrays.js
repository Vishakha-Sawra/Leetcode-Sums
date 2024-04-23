// 1248. Count Number of Nice Subarrays
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2

var numberOfSubarrays = function (nums, k) {
    let count = 0;
    let oddCount = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 1) {
            oddCount++;
        }
        if (map.has(oddCount - k)) {
            count += map.get(oddCount - k);
        }
        map.set(oddCount, (map.get(oddCount) || 0) + 1);
    }
    return count;
};

