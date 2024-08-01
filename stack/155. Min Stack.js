// 155. Min Stack

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
}

MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
}

MinStack.prototype.pop = function() {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
}

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
}

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
}

// Time complexity: O(1)
// Space complexity: O(n)
