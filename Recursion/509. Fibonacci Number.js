// 509. Fibonacci Number

var fib = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
};

// Time complexity: O(2^n)
// Space complexity: O(n)

// Multiple Recursive Calls 
var fib = function (n) {
    if (n <= 1) return n;
    let last = fib(n - 1);
    let secondLast = fib(n - 2);
    return last + secondLast;
};

let res = fib(5);
console.log(res);