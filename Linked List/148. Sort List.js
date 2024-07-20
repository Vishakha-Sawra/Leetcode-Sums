// 148. Sort List

function findMid(head) {
    let slow = head;
    let fast = head.next;
    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function merge(list1, list2) {
    let dummy = new ListNode();
    let temp = dummy;
    while (list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if (list1 != null) {
        temp.next = list1;
    } else {
        temp.next = list2;
    }
    return dummy.next;
}

function sortList(head) {
    if (head == null || head.next == null) return head;
    let mid = findMid(head);
    let right = sortList(mid.next);
    mid.next = null;
    let left = sortList(head);
    return merge(left, right);
}