// 239. Sliding Window Maximum
// nums = [1,3,-1,-3,5,3,6,7], k = 3, output = [3,3,5,5,6,7]

var maxSlidingWindow = function (nums, k) {
    const result = [];
    const deque = [];
    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop(); // Remove elements smaller than the current element from the back of the deque
        }
        deque.push(i);
        if (i - deque[0] >= k) {
            deque.shift(); // Remove elements outside of the window from the front of the deque
        }
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}

// time complexity: O(n) where n is the length of the input array nums
// space complexity: O(k) where k is the size of the window

// The expression nums[deque[deque.length - 1]] is accessing the last element in the deque array, and then using that value as an index to access an element in the nums array.

// Here's a breakdown:

// deque.length - 1: This gets the index of the last element in the deque array.
// deque[deque.length - 1]: This gets the value of the last element in the deque array. In this context, the deque array is storing indices of the nums array, so this value is an index in the nums array.
// nums[deque[deque.length - 1]]: This uses the index obtained from the previous step to access the corresponding element in the nums array.
// So, if deque is [2, 3, 4] and nums is [1, 2, 3, 4, 5], then nums[deque[deque.length - 1]] would be nums[4], which is 5.