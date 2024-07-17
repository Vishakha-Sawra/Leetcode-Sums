// 86. Partition List

var partition = function (head, x) {
    if (!head || !head.next) return head;

    let dummy1 = new ListNode();
    let dummy2 = new ListNode();

    let curr1 = dummy1;
    let curr2 = dummy2;

    while (head) {
        if (head.val < x) {
            curr1.next = head;
            curr1 = curr1.next;
        } else {
            curr2.next = head;
            curr2 = curr2.next;
        }
        head = head.next;
    }

    curr2.next = null;
    curr1.next = dummy2.next;

    return dummy1.next;

};