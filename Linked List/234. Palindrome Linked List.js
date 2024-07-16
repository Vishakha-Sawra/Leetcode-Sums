// 234. Palindrome Linked List

// Recursion

var isPalindrome = function (head) {
    let leftNode = head;

    function traverse(currNode) {
        if (currNode !== null) {
            if (!traverse(currNode.next)) {
                return false;
            }
            if (currNode.val !== leftNode.val) {
                return false;
            }
            leftNode = leftNode.next;
        }
        return true;
    }
    return traverse(head);
};


