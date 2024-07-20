// 141. Linked List Cycle

var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Time complexity: O(n)
// Space complexity: O(1)
