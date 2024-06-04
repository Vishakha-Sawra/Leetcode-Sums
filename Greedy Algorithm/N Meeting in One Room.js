// 134. Gas Station

// Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// Output: 3

// Greedy Algorithm

var canCompleteCircuit = function (gas, cost) {
    let total = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return total >= 0 ? start : -1;
};

// Time Complexity: O(N)
// Space Complexity: O(1)
