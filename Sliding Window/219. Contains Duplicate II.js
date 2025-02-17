// 219. Contains Duplicate II

var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

// time complexity: O(n)
// space complexity: O(n)

// 2. Sliding Window and Two pointer - O(n)

var containsNearbyDuplicate = function (nums, k) {
    let left = 0;
    let right = 0;
    let set = new Set();
    while (right < nums.length) {
        if (set.has(nums[right])) return true;
        set.add(nums[right]);
        if (right - left >= k) { // we need to remove the left element from the set if it is out of the window size k 
            set.delete(nums[left]);
            left++;
        }
        right++;
    }
    return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n) - set to store the elements in the window of size k 