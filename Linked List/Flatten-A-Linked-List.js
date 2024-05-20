// Flatten A Linked List
// 

function mergeTwoLists(a, b) {
    let temp = new Node(0);
    let res = temp;

    while (a !== null && b !== null) {
        if (a.data < b.data) {
            temp.bottom = a;
            temp = temp.bottom;
            a = a.bottom;
        } else {
            temp.bottom = b;
            temp = temp.bottom;
            b = b.bottom;
        }
    }

    if (a !== null) temp.bottom = a;
    else temp.bottom = b;
    return res.bottom;
}

function flatten(root) {
    if (root === null || root.next === null)
        return root;

    root.next = flatten(root.next);
    root = mergeTwoLists(root, root.next);
    return root;
}

