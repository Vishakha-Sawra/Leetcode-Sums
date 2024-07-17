// Rotate List 
// head = [1, 2, 3, 4, 5], k = 2

var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let len = 1;
    let curr = head;
    while (curr.next) {
        curr = curr.next;
        len++;
    }

    curr.next = head;

    let tail = head;

    // k % len to handle cases where k is greater than the list length
    // len - 1 to adjusts for zero-based indexing 

    for (let i = 0; i < len - k % len - 1; i++) {
        tail = tail.next;
    }

    let newHead = tail.next;
    tail.next = null;

    return newHead;
};


var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let len = 1;
    let curr = head;
    while (curr.next) {
        curr = curr.next;
        len++; // 5
    }

    curr.next = head;

    k = k % len;
    let stepsToNewHead = len - k;
    let tail = head;


    for (let i = 0; i < stepsToNewHead - 1; i++) {
        tail = tail.next;
    }

    let newHead = tail.next;
    tail.next = null;

    return newHead;
};