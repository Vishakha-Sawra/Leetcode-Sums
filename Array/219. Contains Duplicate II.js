// 219. Contains Duplicate II

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k) { // why i - map.get(nums[i]) <= k? => because we are looking for the difference between the indices of the two duplicate elements and if the difference is less than or equal to k, we return true. 
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
}