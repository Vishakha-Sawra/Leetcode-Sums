// Reverse Linked List II

// head = [1,2,3,4,5], m = 2, n = 4

var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for(let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }     

    let start = prev.next;
    let then = start.next;

    for (let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }

    return dummy.next;
};