// single number iii
// nums = [1,2,1,3,2,5] output = [3,5]
var singleNumber = function(nums) {
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    
    let mask = 1;
    while ((xor & mask) === 0) {
        mask <<= 1;
    }
    
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        if ((num & mask) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    
    return [num1, num2];
};