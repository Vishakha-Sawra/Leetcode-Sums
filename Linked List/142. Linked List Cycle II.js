// 142. Linked List Cycle II

var detectCycle = function(head) {  
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            let slow2 = head;
            while (slow2 !== slow) {
                slow = slow.next;
                slow2 = slow2.next;
            }
            return slow;
        }
    }
    
    return null;
};

// Time complexity: O(n)
// Space complexity: O(1)


var detectCycle = function (head) {
    let slow = head;
    let fast = head;
    let hasCycle = false;

    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if(!hasCycle) return null;
    slow = head;
    while(slow != fast) {
        slow = slow.next;
        fast = fast.next
    }
    return slow;
}