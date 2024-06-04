// 179. Largest Number

// Input: nums = [10,2]
// Output: "210"

var largestNumber = function (nums) {
    nums.sort((a, b) => {
        return (b + '' + a) - (a + '' + b); // 2 + 10 = 210, 10 + 2 = 102
    });

    let res = nums.join('');
    return res[0] === '0' ? '0' : res;
}

// Time Complexity: O(NlogN)
// Space Complexity: O(N)
