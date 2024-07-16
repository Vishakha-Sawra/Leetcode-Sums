// Parameterised and Functional Recursion

// Parameterised Recursion

function printNumber(i, sum) {
    if (i < 1) {
        console.log(sum);
        return; // exit condition is mandatory in parameterised recursion to avoid infinite loop or stack overflow error 
    }
    printNumber(i - 1, sum + i);
}

printNumber(5, 0);

// 15
// 5 + 4 + 3 + 2 + 1 = 15

// Functional Recursion

function printNumber(n) {
    if (n == 0) return 0;
    return n + printNumber(n - 1);
}

console.log(printNumber(5));

