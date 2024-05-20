// Reverse Nodes in K-Group

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

var reverseKGroup = function (head, k) {
    if (!head || !head.next || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let start = dummy;
    let end = head;
    let count = 0;

    while (end) {
        count++;
        if (count % k === 0) {
            start = reverse(start, end.next);
            end = start.next;
        } else {
            end = end.next;
        }
    }

    return dummy.next;
}

const reverse = (start, end) => {
    let prev = start;
    let curr = start.next;
    let first = curr;

    while (curr !== end) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    start.next = prev;
    first.next = curr;

    return first;
}



var reverseKGroup = function (head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;
    let current = head;

    while (true) {
        let tail = current;
        let index = 0;
        while (current && index < k) {
            current = current.next;
            index++;
        }
        if (index != k) break;

        let prev = groupPrev.next;
        let temp = prev.next;
        for (let i = 1; i < k; i++) {
            prev.next = temp.next;
            temp.next = groupPrev.next;
            groupPrev.next = temp;
            temp = prev.next;
        }

        groupPrev = prev;
        current = groupPrev.next;
    }

    return dummy.next;
};


var reverseKoGroup = function (head, k) {
    if (!head || !head.next || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let start = dummy;
    let end = head;
    let count = 0;

    while (end) {
        count++;
        if (count % k === 0) {
            start = reverse(start, end.next); // reverse the group of k elements starting with start.next and ending with end.next (exclusive) and return the new start node of the reversed group (which is the old end node) . where start is the node before the group and end is the node after the group (exclusive) start is at 1, end is at 3 (exclusive)
            end = start.next; // set end to the next node of the reversed group (which is the next node of the old end node) end = 
        } else {
            end = end.next;
        }
    }

    return dummy.next;
}

const reverseo = (start, end) => {
    let prev = start; // prev is the node before the group (which is the start node) 
    let curr = start.next;
    let first = curr;

    while (curr !== end) {
        let next = curr.next;
        curr.next = prev;
        prev = curr; // prev is the node after the group (exclusive) 
        curr = next;
    }
    // 0 -> 2 -> 1 -> 3 -> 4 -> 5 , start = 0, end = 3 (exclusive), in 3 iterations, prev = 1, curr = 3, next = 4, prev = 2, curr = 4, next = 5, prev = 3, curr = 5, next = null   

    start.next = prev; // start is the node before the group and prev is the node after the group (exclusive) start is at 1, prev is at 3 (exclusive) 
    first.next = curr;

    return first;
}