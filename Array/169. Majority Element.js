// 169. Majority Element

// nums = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5] output = 5

//if you are sure that the majority element exists in the array use this:
function majorityElement(nums) {
    let cnt = 0;
    let el;

    for (let i = 0; i < nums.length; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = nums[i];
        } else if (el === nums[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    return el;
}

// time complexity: O(n)
// space complexity: O(1)

// this you will use if you are not sure that the majority element exists in the array or not
function majorityElement(nums) {
    let n = nums.length;
    let cnt = 0;
    let el;

    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = nums[i];
        } else if (el === nums[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}


// 2. Using Hash Map

var majorityElement = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    for(let key in map) {
        if(map[key] > nums.length / 2) {
            return Number(key);
        }
    }
}

// time complexity: O(n)
// space complexity: O(n)