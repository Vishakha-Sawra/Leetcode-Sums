// Merge Sorted Array
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // 2
    let j = n - 1; // 2
    let k = m + n - 1; // 2 + 2 - 1 = 3
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    
    return nums1;
}
// Time Complexity: O(n)
// space complexity: O(1)