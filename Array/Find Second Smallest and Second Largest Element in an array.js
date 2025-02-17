// Find Second Smallest and Second Largest Element in an array

var findSecondSmallestAndLargest = function (nums) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < smallest) {
            secondSmallest = smallest;
            smallest = nums[i];
        } else if (nums[i] < secondSmallest && nums[i] !== smallest) {
            secondSmallest = nums[i];
        }

        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        } else if (nums[i] > secondLargest && nums[i] !== largest) {
            secondLargest = nums[i];
        }
    }

    return [secondSmallest, secondLargest];
}