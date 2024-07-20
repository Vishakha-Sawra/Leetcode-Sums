// 2095. Delete the Middle Node of a Linked List

var deleteMiddle = function(head) {
    let slow = fast = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!prev) return null;
    prev.next = slow.next;
    return head;
};

// Time complexity: O(n)
// Space complexity: O(1)
