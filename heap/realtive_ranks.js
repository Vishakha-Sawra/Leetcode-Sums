// Relative Ranks

// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]

var findRelativeRanks = function (nums) {
    let copy = [...nums];
    copy.sort((a, b) => b - a);
    //[5, 4, 3, 2, 1] => [1, 2, 3, 4, 5]
    let map = new Map();
    for (let i = 0; i < copy.length; i++) {
        if (i === 0) {
            map.set(copy[i], "Gold Medal");
        } else if (i === 1) {
            map.set(copy[i], "Silver Medal");
        } else if (i === 2) {
            map.set(copy[i], "Bronze Medal");
        } else {
            map.set(copy[i], (i + 1).toString());
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = map.get(nums[i]);
    }
    return nums;
}


// Time complexity: O(nlogn)
// Space complexity: O(n)


const findRelativeRanks = function (score) {
    const ranks = new MaxPriorityQueue();
    // MaxPriorityQueue is a class from the npm package "js-priority-queue" 
    // that implements a max heap. 
    // what does this basically mean?
    // it means that the first element in the queue is the largest element
    //so its sorteing it in descending order?
    // yes
    for (let i = 0; i < score.length; i++)
        ranks.enqueue(i, score[i]);
    // what does this do?
    // this adds the index and the score to the queue
    // what does enqueue mean?
    // enqueue means to add an element to the queue
    // this for loop will run after the below one?
    // yes

    for (let i = 0; i < score.length; i++) {
        const item = ranks.dequeue();
        // what does this do?
        // this removes the first element in the queue 
        //why?
        // because we want to get the largest element first
        let rank; // what does this do?
        // this is the rank of the element
        // why do we need this?
        // because we need to return the rank of the element

        switch (i) {
            case 0:
                rank = "Gold Medal";
                break;
            case 1:
                rank = "Silver Medal";
                break;
            case 2:
                rank = "Bronze Medal";
                break;
            default:
                rank = (i + 1).toString();
        }

        score[item.element] = rank;
        // what does this do?
        // this sets the score of the element to the rank
    }

    return score;
    // retuns => ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
};

// Time complexity: O(nlogn)
// Space complexity: O(n)
