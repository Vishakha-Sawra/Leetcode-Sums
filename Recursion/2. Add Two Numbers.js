// 2. Add Two Numbers

// using recursion

var addTwoNumbers = function (l1, l2) {
    return addTwoNumbersHelper(l1, l2, 0);
};

function addTwoNumbersHelper(l1, l2, carry) {
    if (l1 === null && l2 === null && carry === 0) {
        return null;
    }

    let val1 = (l1 !== null) ? l1.val : 0;
    let val2 = (l2 !== null) ? l2.val : 0;
    let sum = val1 + val2 + carry;

    carry = Math.floor(sum / 10);
    let resultNode = new ListNode(sum % 10);

    let next1 = (l1 !== null) ? l1.next : null;
    let next2 = (l2 !== null) ? l2.next : null;
    resultNode.next = addTwoNumbersHelper(next1, next2, carry);

    return resultNode;
}


// optimized solution

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    while (l1 !== null || l2 !== null) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
};




// Time & Space: (O(\max(N, M)))