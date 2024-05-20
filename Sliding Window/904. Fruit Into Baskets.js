// 904. Fruit Into Baskets

var totalFruit = function (tree) {
    let l = 0, r = 0, maxLen = 0, map = new Map();
    while (r < tree.length) {
        map[tree[r]]++;
        if (map.size > 2) {
            map[tree[l]]--;
            if (map[tree[l]] === 0) {
                map.delete(tree[l]);
            }
            l++;
        }
        if (map.size <= 2) {
            maxLen = Math.max(maxLen, r - l + 1);
        }
        r++;
    }
    return maxLen;
};

// tree = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];

var totalFruit = function (tree) {
    let l = 0, r = 0, maxLen = 0, map = new Map();
    while (r < tree.length) {
        map.set(tree[r], (map.get(tree[r]) || 0) + 1);
        while (map.size > 2) {
            map.set(tree[l], map.get(tree[l]) - 1);
            if (map.get(tree[l]) === 0) {
                map.delete(tree[l]);
            }
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
};