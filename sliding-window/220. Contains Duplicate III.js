// Contains Duplicate III
// Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
// Output: true
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (k < 1 || t < 0) return false;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const bucket = Math.floor(num / (t + 1));
        if (map.has(bucket)
            || map.has(bucket - 1) && Math.abs(num - map.get(bucket - 1)) <= t
            || map.has(bucket + 1) && Math.abs(num - map.get(bucket + 1)) <= t) {
            return true;
        }
        if (map.size >= k) {
            const lastBucket = Math.floor(nums[i - k] / (t + 1));
            map.delete(lastBucket);
        }
        map.set(bucket, num);
    }
    return false;
};


// The function containsNearbyAlmostDuplicate is designed to solve the problem of determining whether there exist two distinct indices i and j in the array nums such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

// Here's a step-by-step explanation of how the function works:

// If k is less than 1 or t is less than 0, the function immediately returns false. This is because k represents the maximum index difference allowed, and t represents the maximum value difference allowed. If k is less than 1, there are no two distinct indices that satisfy the condition. If t is less than 0, there are no two distinct values that satisfy the condition.

// The function creates a new Map map to store the numbers in the array nums. The keys in the map are the "buckets" that the numbers fall into, and the values are the numbers themselves. Each bucket represents a range of t + 1 numbers.

// The function then iterates over the array nums. For each number:

// It calculates the bucket that the number falls into by dividing the number by t + 1 and taking the floor. This ensures that any two numbers in the same bucket or adjacent buckets have a difference of at most t.

// It checks if the map has the current bucket or the adjacent buckets. If it does, and the absolute difference between the current number and the number in the bucket is less than or equal to t, the function returns true. This means that there are two numbers in the array that meet the conditions.

// If the size of the map is greater than or equal to k, it removes the number that is k positions before the current number from the map. This ensures that the map only contains numbers that are within k positions of the current number.

// It adds the current number to the map, in its corresponding bucket.

// If the function goes through the entire array without finding two numbers that meet the conditions, it returns false.

// In summary, this function uses a sliding window and bucketing technique to efficiently check if there are two numbers in the array that meet the conditions. The sliding window ensures that the function only considers numbers that are within k positions of each other, and the bucketing technique allows the function to efficiently check if there are two numbers with a difference of at most t.