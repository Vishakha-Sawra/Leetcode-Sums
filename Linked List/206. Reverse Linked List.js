// 206. Reverse Linked List

// Recursion

var reverseList = function (head) {
    if (!head || !head.next) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

// Time complexity: O(n)
// Space complexity: O(n)
