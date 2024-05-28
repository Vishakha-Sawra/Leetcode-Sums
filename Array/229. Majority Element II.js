var majorityElement = function (nums) {
    let cnt1 = 0, cnt2 = 0;
    let el1 = -Infinity, el2 = -Infinity;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (cnt1 === 0 && el2 != nums[i]) {
            cnt1 = 1;
            el1 = nums[i]
        } else if (cnt2 === 0 && el1 != nums[i]) {
            cnt2 = 1;
            el2 = nums[i]
        }
        else if (nums[i] === el1) {
            cnt1++
        } else if (nums[i] === el2) {
            cn2t++
        } else {
            cnt1--, cnt2--;
        }
    }

    let ls = [];
    cnt1 = 0, cnt2 = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === el1) {
            cnt1++
        }
        if (nums[i] === el2) {
            cnt2++
        }
    }

    let mini = Math.floor(n / 3) + 1;
    if (cnt1 >= mini) {
        ls.push(el1);
    }
    if (cnt2 >= mini) {
        ls.push(el2);
    }
};