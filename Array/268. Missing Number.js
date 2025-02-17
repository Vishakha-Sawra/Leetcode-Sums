// 268. Missing Number

var missingNumber = function (nums) {
    let n = nums.length;
    let sum = n * (n + 1) / 2; // why n * (n + 1) / 2? because the sum of 1 to n is n * (n + 1) / 2 . why not 0 to n? because the array starts from 0 to n - 1 so the sum of 0 to n - 1 is n * (n - 1) / 2
    for (let num of nums) {
        sum -= num;
    }
    return sum;
};

// XOR solution if theres overflow in sum calculation 
function missingNumber(nums) {
    let xor1 = 0;
    let xor2 = 0;
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        xor2 = xor2 ^ nums[i]; // XOR of array elements
        xor1 = xor1 ^ (i + 1); // XOR up to [1...N-1]
    }
    xor1 = xor1 ^ n; // XOR up to [1...N]

    return xor1 ^ xor2; // the missing number
}