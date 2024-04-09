// 82. Remove Duplicates from Sorted List II
// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

var deleteDuplicates = function (head) {
    if (!head) return null;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let current = head;
    while (current) {
        while (current.next && current.val === current.next.val) {
            current = current.next;
        }
        if (prev.next === current) {
            prev = prev.next;
        } else {
            prev.next = current.next;
        }
        current = current.next;
    }
    return dummy.next;
};

// time complexity: O(n)
// space complexity: O(1)