// Longest Consecutive Sequence 
// Input: nums = [100,4,200,1,3,2]
// Output: 4
var longestConsecutive = function (nums) {
    let set = new Set(nums);
    let max = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;
            while (set.has(current + 1)) {
                current++;
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
}

var largestConsecutive = function (nums) {
    let set = new Set(nums);
    let max = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;
            while (set.has(current + 1)) {
                current++;
                count++;
            }
            max = Math.max(max, count);
        }
    }
    return max;
}
