// 611. Valid Triangle Number

// nums = [2,2,3,4]
// => output 3 
// => (2,2,3), (2,3,4), (2,3,4)

const triangleNumber = nums => {
    nums.sort((a, b) => a - b);

    let count = 0;

    for (let k = nums.length - 1; k > 1; k--) {
        for (let i = 0, j = k - 1; i < j;) {
            if (nums[i] + nums[j] > nums[k]) {
                count += j - i;
                j--;
            } else {
                i++;
            }
        }
    }

    return count;
}; 