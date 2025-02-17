// 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) { 
        if (nums1[i] > nums2[j]) { 
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) { // If there are still elements in nums2 array, put them at the beginning of nums1 array 
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Time complexity: O(n)
// Space complexity: O(1)