// 496. Next Greater Element I

var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length && stack[stack.length - 1] < nums2[i]) {
            map[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }
    return nums1.map(num => map[num] || -1);
}

// Time complexity: O(n)
// Space complexity: O(n)