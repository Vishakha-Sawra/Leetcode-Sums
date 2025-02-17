// 11. Container With Most Water

var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length - 1;
    
    while(left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left)); // Calculate the area and update the max area. take the minimum height as the height of the container and the width as the difference between the two pointers.  why minimum height? => because the water will overflow from the container with the smaller height.
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
}

// The idea is to start with the maximum width and then move the pointer with the smaller height towards the other pointer. This way we can maximize the area. This is a two pointer approach. 

// Why this works? => If we move the pointer with the larger height, the area will decrease as the width will decrease. So, we move the pointer with the smaller height.  The area will increase if we move the pointer with the smaller height. 