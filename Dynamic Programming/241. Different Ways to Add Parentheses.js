// 241. Different Ways to Add Parentheses

var diffWaysToCompute = function(input) {
    let res = [];
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char === '+' || char === '-' || char === '*') {
            let left = diffWaysToCompute(input.slice(0, i)); 
            let right = diffWaysToCompute(input.slice(i + 1)); 
            for (let l of left) {
                for (let r of right) {
                    if (char === '+') {
                        res.push(l + r);
                    } else if (char === '-') {
                        res.push(l - r);
                    } else {
                        res.push(l * r);
                    }
                }
            }
        }
    }
    if (res.length === 0) {
        res.push(parseInt(input)); 
    }
    return res;
}

// time complexity: O(2^n)
// space complexity: O(2^n)