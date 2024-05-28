// 283. Move Zeroes
function moveZeros(nums) {
    let n = nums.length;
    let j = -1;

    // Place the pointer j at the first zero element in the array
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }

    // No non-zero elements found in the array
    if (j === -1) return nums;

    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    return nums;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(' '));




