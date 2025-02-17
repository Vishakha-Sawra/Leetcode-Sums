// 217. Contains Duplicate

var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }
    return false;
}

// time complexity: O(n)
// space complexity: O(n)

var containsDuplicate = function(nums) {
    let set = new Set(nums);
    if(set.size !== nums.length) {
        return true;
    }
    return false;
};