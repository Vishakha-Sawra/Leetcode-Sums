// 904. Fruit Into Baskets

var totalFruit = function (tree) {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    let map = new Map();
    
    while (right < tree.length) {
        map.set(tree[right], (map.get(tree[right]) || 0) + 1);
        
        if (map.size > 2) {  
            map.set(tree[left], map.get(tree[left]) - 1);
            if (map.get(tree[left]) === 0) {
                map.delete(tree[left]);
            }
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
        right++;  
    }
    
    return maxLen;
};
