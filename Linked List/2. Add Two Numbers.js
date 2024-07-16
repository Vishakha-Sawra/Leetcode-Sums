// Add Two Numbers

// Iterative solution

var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let list1 = l1, list2 = l2, curr = dummyHead;
    let carry = 0;
    while (list1 != null || list2 != null) {
        let val1 = (list1 != null) ? list1.val : 0;
        let val2 = (list2 != null) ? list2.val : 0;
        let sum = carry + val1 + val2;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (list1 != null) list1 = list1.next;
        if (list2 != null) list2 = list2.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}

// Recursion solution

var addTwoNumbers = function (l1, l2) {
    return addTwoNumbersHelper(l1, l2, 0)
}

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