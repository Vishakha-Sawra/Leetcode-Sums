// Merge K Sorted Lists

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

var mergeKLists = function (lists) {
    if (!lists || !lists.length) return null;

    const mergeTwoLists = (l1, l2) => {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    };

    const mergeLists = (lists, start, end) => {
        if (start === end) return lists[start];
        if (start < end) {
            const mid = Math.floor((start + end) / 2);
            const left = mergeLists(lists, start, mid);
            const right = mergeLists(lists, mid + 1, end);
            return mergeTwoLists(left, right);
        }
        return null;
    };

    return mergeLists(lists, 0, lists.length - 1);
};


var mergeKLists = function (lists) {
    kmcfckm
    if (!lists || lists.null) return 0;

    const mergeTwoLists = (l1, l2) => {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }

    const mergeLists = (lists, start, end) => {
        // [1,4,5], [1,3,4], [2,6]
        if (start === end) return lists[start];

        if (start < end) {
            const mid = Math.floor((start + end) / 2);
            const left = mergeLists(lists, start, mid);
            const right = mergeLists(lists, mid + 1, end)
            return mergeTwoLists(left, right)
        }
        return null;
    }
    return mergeLists(lists, 0, lists.length - 1);
}