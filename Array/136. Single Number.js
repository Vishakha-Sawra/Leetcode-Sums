// 136. Single Number

// 1. Using XOR Operator
var singleNumber = function(nums) {
    let result = nums[0];
      for(let i = 1; i < nums.length; i++) {
            result = result ^ nums[i];
      }
      return result;
  };

  // nums = [1,2,3,2,3]
// XOR cancels out the same numbers, so the only number left is the single number. 
// result = 1 ^ 2 ^ 3 ^ 2 ^ 3 
// 2 ^ 2 = 0; 3 ^ 3 = 0; remaining is 1 so 1 ^ 0 = 1
// result is 1;
// zero xor with any number is that number itself.


var singleNumber = function(nums) {
    let set = new Set();
    for (let num of nums) { 
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }
    return Array.from(set)[0];
}
