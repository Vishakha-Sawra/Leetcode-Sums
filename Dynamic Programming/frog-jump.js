// Frog Jump

function canCross(stones) {
    const dp = new Map();

    for (let stone of stones) {
        dp.set(stone, new Set());
    }

    dp.get(0).add(0);

    for (let stone of stones) {
        for (let jumpSize of dp.get(stone)) {
            for (let k = jumpSize - 1; k <= jumpSize + 1; k++) {
                if (k > 0 && dp.has(stone + k)) {
                    dp.get(stone + k).add(k);
                }
            }
        }
    }

    return dp.get(stones[stones.length - 1]).size > 0;
}


// Time complexity: O(n^2) 
// Space complexity: O(n)
// stones = [0,1,3,5,6,8,12,17]

function canCross(stones, index = 0, jumpSize = 1) {
    if (index >= stones.length - 1) {
        return true;
    }

    for (let i = index + 1; i < stones.length; i++) {
        let gap = stones[i] - stones[index];
        if (gap >= jumpSize - 1 && gap <= jumpSize + 1) {
            if (canCross(stones, i, gap)) {
                return true;
            }
        }
    }

    return false;
}



