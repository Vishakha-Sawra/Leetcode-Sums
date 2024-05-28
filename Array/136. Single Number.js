// 136. Single Number

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

var singleNumber = function (nums) {
    let res = 0;
    for (let num of nums) {
        res ^= num;
    }
    return res;
};

let arr = [4, 1, 2, 1, 2];
let val = singleNumber(arr);
console.log(val);
// Output: 4