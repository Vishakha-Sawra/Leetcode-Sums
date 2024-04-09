// Reconstruct Itinerary
// Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
// Output: ["JFK","MUC","LHR","SFO","SJC"]

var findItinerary = function (tickets) {
    const adj = {};
    tickets.forEach(([src, dst]) => {
        if (!adj[src]) {
            adj[src] = [];
        }
        adj[src].push(dst);
    });

    for (const key in adj) { // if key is sorting, it;s value will be sorted? => yes
        adj[key].sort();
    }

    const stack = ["JFK"];
    const res = [];

    while (stack.length > 0) {
        const current = stack[stack.length - 1];

        if (adj[current] && adj[current].length > 0) {
            stack.push(adj[current].shift()); // shift() => remove first element and return it that is MCU for JFK? => yes
        } else {
            res.unshift(stack.pop()); // res.unshift(stack.pop()) => res = ["SJC", "SFO", "LHR", "MUC", "JFK"] => yes
        }
    }

    return res; // ["JFK","MUC","LHR","SFO","SJC"]
};
