// 237. Delete Node in a Linked List

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}

// Time complexity: O(1)
// Space complexity: O(1)