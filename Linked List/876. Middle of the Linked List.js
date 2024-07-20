// 876. Middle of the Linked List

var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Time complexity: O(n)
// Space complexity: O(1)
