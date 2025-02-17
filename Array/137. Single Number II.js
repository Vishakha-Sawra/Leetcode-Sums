// 137. Single Number II

// Using Bit Manipulation
var singleNumber = function(nums) {
    let ones = 0, twos = 0;
    for(let i = 0; i < nums.length; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
}

// time complexity: O(n)
// space complexity: O(1)

// 2. using Hash Map

var singleNumber = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    for(let key in map) {
        if(map[key] === 1) {
            return key;
        }
    }
}

// time complexity: O(n)
// space complexity: O(n)
