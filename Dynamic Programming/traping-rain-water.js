// Traping Rain Water

var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= leftMax ? (leftMax = height[left]) : result += (leftMax - height[left]);
            left++;
        } else {
            height[right] >= rightMax ? (rightMax = height[right]) : result += (rightMax - height[right]);
            right--;
        }
    }
    return result;
};


// Dynamic Programming
// height = [0,1,0,2,1,0,1,3,2,1,2,1]

var trap = function (height) {
    if (!height || height.length === 0) {
        return 0;
    }

    const n = height.length; // 12
    const leftMax = new Array(n).fill(0); // at start [0,0,0,0,0,0,0,0,0,0,0,0] -> [0,1,1,2,2,2,2,3,3,3,3,3]
    const rightMax = new Array(n).fill(0); // at start [0,0,0,0,0,0,0,0,0,0,0,0] -> [3,3,3,3,3,3,3,3,2,2,2,1]

    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) { // AT START i = 10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let trappedWater = 0;
    for (let i = 0; i < n; i++) {
        trappedWater += Math.min(leftMax[i], rightMax[i]) - height[i]; // trappedWater = 0 + 0 + 1 + 0 + 1 + 2 + 1 + 0 + 0 + 1 + 0 + 0
    }

    return trappedWater;
}

