// Find centre of star graph

var findCentre = function (edges) {
    let [a, b] = edges[0];
    let [c, d] = edges[1];
    if (a === c || a === d) return a;
    return b;
}

// time complexity: O(1)
// space complexity: O(1)
// sure? its right time complexity?
// yes, it is right time complexity. because we are only looking at the first two edges.
// we are not looking at the rest of the edges.
// so, it is O(1) time complexity.

// [[1,2],[2,3],[4,2]]