// 846. Hand of Straights

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true

var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;
    const map = new Map();
    hand.forEach(card => map.set(card, (map.get(card) || 0) + 1));
    hand.sort((a, b) => a - b);
    for (let card of hand) {
        if (map.get(card) === 0) continue;
        for (let i = 0; i < groupSize; i++) {
            if ((map.get(card + i) || 0) === 0) return false;
            map.set(card + i, map.get(card + i) - 1);
        }
    }
    return true;
}

// Time: O(NlogN), Space: O(N)