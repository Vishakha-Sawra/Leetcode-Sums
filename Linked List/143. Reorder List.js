// 143. Reorder List

// Recursion

var reorderList = function (head) {
    if (!head || !head.next) return;
    let mid = findMid(head);
    let l1 = head;
    let l2 = mid.next;
    mid.next = null;
    l2 = reverse(l2);
    merge(l1, l2);
};

function findMid(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

function merge(l1, l2) {
    while (l1 && l2) {
        let l1Next = l1.next;
        let l2Next = l2.next;
        l1.next = l2;
        l1 = l1Next;
        l2.next = l1;
        l2 = l2Next;
    }
}

