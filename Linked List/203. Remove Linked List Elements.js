// 203. Remove Linked List Elements

var removeElements = function (head, val) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
};

// Time complexity: O(n)
// Space complexity: O(1)
