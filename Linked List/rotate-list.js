// Rotate List 

// head = [1, 2, 3, 4, 5], k = 2

var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let len = 1; // 5
    let curr = head;
    while (curr.next) {
        curr = curr.next;
        len++;
    }

    curr.next = head;

    let tail = head;
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
        len++
    }
    curr.next = head;

    let tail = head;
    for (let i = 0; i < len - k % len - 1; i++) {
        tail = tail.next;
    }

    let newHead = tail.next;
    tail.next = null;

    return newHead;
}