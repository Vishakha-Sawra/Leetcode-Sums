// 1. Print a Number using Recursion
function printNumber(n) {
    if (n === 0) return; // base case
    printNumber(n - 1); // recursive call
    console.log(n); // print the number
}

printNumber(5);

// 2. Print a name 5 times using Recursion
function printName(i, n) {
    if (i > n) return;
    console.log(i + " Henna");
    printName(i + 1, n);
}

printName(1, 5);

// 3. Print name 5 times in reverse order using Recursion
function printNameReverse(i, n) {
    if (i < 1) return;
    console.log(i + " Henna");
    printNameReverse(i - 1, n);
}

printNameReverse(5, 5);

// 4. Print a name 5 times using Recursion but backtracking
function printNameBacktrack(i, n) {
    if (i > n) return;
    printNameBacktrack(i + 1, n);
    console.log(i + " Henna");
}

printNameBacktrack(1, 5);



// 1. Print a Number using Recursion
// 1
// 2
// 3
// 4
// 5

// 2. Print a name 5 times using Recursion
// 1 Henna
// 2 Henna
// 3 Henna
// 4 Henna
// 5 Henna

// 3. Print name 5 times in reverse order using Recursion
// 5 Henna
// 4 Henna
// 3 Henna
// 2 Henna
// 1 Henna

// 4. Print a name 5 times using Recursion but backtracking
// 5 Henna
// 4 Henna
// 3 Henna
// 2 Henna
// 1 Henna
