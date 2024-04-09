// Copy List with Random Pointer

var copyRandomList = function (head) {
    let iter = head;
    let front = head;

    // First round: make a copy of each node,
    // and link them together side-by-side in a single list.
    while (iter !== null) {
        front = iter.next;

        let copy = new Node(iter.val);
        iter.next = copy;
        copy.next = front;

        iter = front;
    }

    // Second round: assign random pointers for the copy nodes.
    iter = head;
    while (iter !== null) {
        if (iter.random !== null) {
            iter.next.random = iter.random.next;
        }
        iter = iter.next.next;
    }

    // Third round: restore the original list, and extract the copy list.
    iter = head;
    let pseudoHead = new Node(0);
    let copy = pseudoHead;

    while (iter !== null) {
        front = iter.next.next;

        // extract the copy
        copy.next = iter.next;
        copy = copy.next;

        // restore the original list
        iter.next = front;

        iter = front;
    }

    return pseudoHead.next;
};


var copyRandomList = function (head) {
    let iter = head;
    let front = head;

    // 1st round
    while (iter !== null) {
        front = iter.next;

        let copy = new Node(iter.val)
        iter.next = copy;
        copy.next = front;

        iter = front;
    }

    // 2nd round
    iter = head;
    while (iter !== null) {
        if (iter.random !== null) {
            iter.next.random = iter.random.next;
        }
        iter = iter.next.next;
    }

    //3rd round
    iter = head;
    let pseudoHead = new Node(0);
    let copy = pseudoHead;

    while (iter !== null) {
        front = iter.next.next;

        copy.next = iter.next;
        copy = copy.next;

        iter.next = front;
        iter = front;
    }
    return pseudoHead.next;
}

