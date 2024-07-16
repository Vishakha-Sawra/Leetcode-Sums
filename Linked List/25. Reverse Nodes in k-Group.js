// Reverse Nodes in K-Group

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

var reverseKGroup = function (head, k) {
    if (head === null || k === 1) return head;

    // Dummy node to help with edge cases
    let dummy = new ListNode(0);
    dummy.next = head;

    let count = 0;
    let current = head;

    // Count the number of nodes in the list
    while (current) {
        count++;
        current = current.next;
    }

    let prev = dummy;
    let tail = head;

    while (count >= k) {
        current = prev.next;
        tail = current.next;

        // Reverse k nodes
        for (let i = 1; i < k; i++) {
            current.next = tail.next;
            tail.next = prev.next;
            prev.next = tail;
            tail = current.next;
        }

        // Move prev to the end of the reversed group
        prev = current;
        count -= k;
    }

    return dummy.next;
}