// 718. Maximum Length of Repeated Subarray

// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Dynamic Programming 
var findLength = function (nums1, nums2) {
    const dp = Array(nums1.length + 1).fill(0).map(() => Array(nums2.length + 1).fill(0));
    let max = 0;
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max;
};

// time complexity: O(n * m) where n is the length of the input array nums1 and m is the length of the input array nums2
// space complexity: O(n * m) where n is the length of the input array nums1 and m is the length of the input array nums2

// Approach: Sliding Window 

var findLength = function (nums1, nums2) {
    let max = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                let len = 0;
                while (i + len < nums1.length && j + len < nums2.length && nums1[i + len] == nums2[j + len]) {
                    len++;
                }
                max = Math.max(max, len);
            }
        }
    }
    return max;
};
// time o(n)^3
// space o(1)