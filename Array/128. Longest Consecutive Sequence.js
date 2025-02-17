// 128. Longest Consecutive Sequence

var longestConsecutive = function(nums) {
    let set = new Set(nums); // convert the array to a set to have O(1) lookup time 
    let longest = 0;
    
    for (let num of set) {
        if (!set.has(num - 1)) { // if the set doesn't have num - 1, then it means num is the start of the sequence
            let currentNum = num;
            let currentStreak = 1;
            
            while (set.has(currentNum + 1)) { 
                currentNum++;
                currentStreak++;
            }
            
            longest = Math.max(longest, currentStreak);
        }
    }
    
    return longest;
}

// Time complexity: O(n)
// Space complexity: O(n)

// Solution 2: Sorting

var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b);
    
    let longest = 1;
    let currentStreak = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            if (nums[i] === nums[i - 1] + 1) {
                currentStreak++;
            } else {
                longest = Math.max(longest, currentStreak);
                currentStreak = 1;
            }
        }
    }
    
    return Math.max(longest, currentStreak);
}

// Time complexity: O(nlogn)
// Space complexity: O(1) or O(n) if using merge sort or quick sort respectively 
