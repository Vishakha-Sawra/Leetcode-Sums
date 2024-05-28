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
