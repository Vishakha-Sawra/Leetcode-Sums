// 24. Swap Nodes in Pairs

var swapPairs = function (head) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let current = dummy;

    while (current.next !== null && current.next.next !== null) {
        let first = current.next;
        let second = current.next.next;
        first.next = second.next;
        current.next = second;
        current.next.next = first;
        current = current.next.next;
    }
    return dummy.next;
};

// Recursion solution

var swapPairs = function (head) {
    if (head === null || head.next === null) return head;

    let first = head;
    let second = head.next;

    first.next = swapPairs(second.next);
    second.next = first;

    return second;
};
