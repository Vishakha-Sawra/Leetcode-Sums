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
        if (i >= k - 1) { // Start adding elements to the result array once the window size is reached 
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


// 1. Brute force Solution -

var maxSlidingWindow = function (nums, k) {
    const result = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let max = -Infinity;
        for (let j = i; j < i + k; j++) {
            max = Math.max(max, nums[j]);
        }
        result.push(max);
    }
    return result;
}

// Exeeded time limit for large inputs - time complexity: O(n*k) where n is the length of the input array nums and k is the size of the window
// space complexity: O(n-k+1) where n is the length of the input array nums and k is the size of the window 

//  2. Sliding window and two pointer - 

var maxSlidingWindow = function (nums, k) {
    let left = 0;
    let right = 0;
    let result = [];
    let max = -Infinity;
    while (right < nums.length) {
        max = Math.max(max, nums[right]);
        if (right - left + 1 === k) { 
            result.push(max);
            if (nums[left] === max) { // if the left element is the max element, we need to find the new max element in the window . How would i know this? -> if the left element is the max element, then the max element is going to be the next element in the window. So, we need to find the max element in the window from left+1 to right.  
                max = -Infinity;
                for (let i = left + 1; i <= right; i++) {
                    max = Math.max(max, nums[i]);
                }
            }
            left++;
        }
        right++;
    }
    return result;
}

// Time Complexity: O(n*k) where n is the length of the input array nums and k is the size of the window 
// Space Complexity: O(n-k+1) where n is the length of the input array nums and k is the size of the window 