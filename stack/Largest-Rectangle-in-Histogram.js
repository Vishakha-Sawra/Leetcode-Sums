// Largest Rectangle in Histogram

var largestRectangleArea = function (heights) {
    let maxArea = 0;
    let stack = [];
    heights.push(0); // add a dummy bar to the end of the array
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) { // if the current bar is shorter than the previous one in the stack 
            let j = stack.pop();
            let k = stack.length > 0 ? stack[stack.length - 1] : -1; // k is the index of the first shorter bar on the left of j 
            maxArea = Math.max(maxArea, heights[j] * (i - k - 1));
        }
        stack.push(i);
    }
    return maxArea;
};

