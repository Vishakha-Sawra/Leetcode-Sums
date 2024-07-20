// 147. Insertion Sort List

var insertionSortList = function(head) {
    if (!head) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let cur = head;
    while (cur.next) {
        if (cur.val <= cur.next.val) {
            cur = cur.next;
        } else {
            let pre = dummy;
            while (pre.next.val < cur.next.val) {
                pre = pre.next;
            }
            let temp = cur.next;
            cur.next = temp.next;
            temp.next = pre.next;
            pre.next = temp;
        }
    }
    return dummy.next;
}