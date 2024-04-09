// Merge Two Sorted Lists

// l1 = [1,2,4], l2 = [1,3,4]
// output = [1,1,2,3,4,4]

var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    if (l1 !== null) {
        dummy.next = l1;
    } else {
        dummy.next = l2;
    }
    return head.next;
}

// Time complexity : O(n + m) where n and m are the lengths of the two linked lists.

// Space complexity : O(1) since it's a constant space solution.

var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-1);
    let head = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
    }
    if (l1 !== null) {
        dummy.next = l1;
    } else {
        dummy.next = l2;
    }
    return head.next;
}