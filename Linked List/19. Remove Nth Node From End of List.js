// 19. Remove Nth Node From End of List

// Input: head = [1,2,3,4,5], n = 2

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    return dummy.next;
};

// Recursion solution

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    for (let i = 1; i <= n + 1; i++) {
        first = first.next;
    }

    const removeNth = (first, second) => {
        if (first === null) {
            second.next = second.next.next;
            return;
        }
        removeNth(first.next, second.next);
    };

    removeNth(first, second);

    return dummy.next;
};

// Time complexity: O(n)
// Space complexity: O(1) 