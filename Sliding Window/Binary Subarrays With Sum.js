// Binary Subarrays With Sum

// 1. Brute Force - Generate all possible subarrays and check if they have the sum equal to the target sum - O(n) time, O(1) space where n is the length of the input array 

var numSubarraysWithSum = function (nums, goal) {
  let sum = 0;
  let count = 0;
  let map = new Map();
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - goal)) {
      count += map.get(sum - goal);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};



// 2. Sliding Window - O(n) time, O(1) space where n is the length of the input array

// Helper function: Count subarrays with sum <= target
function countSubarrays(nums, target) {
    if (target < 0) return 0;
  
    let left = 0, sum = 0, count = 0;
    
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];
  
      // Shrink the window if sum exceeds target
      while (sum > target) {
        sum -= nums[left];
        left++;
      }
  
      // Count all valid subarrays ending at right
      count += right - left + 1;
    }
  
    return count;
  }
  
  // Main function: Count subarrays with sum equal to goal
  function numSubarraysWithSum(nums, goal) {
    return countSubarrays(nums, goal) - countSubarrays(nums, goal - 1);
  }
    