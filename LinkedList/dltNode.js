class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteNode(head, x) {
    // If the linked list is empty
    if (!head) {
        return null;
    }

    // If the node to be deleted is the head
    if (x === 1) {
        return head.next;
    }

    let current = head;
    let prev = null;
    let count = 1;

    // Traverse the list until the xth node is reached
    while (current && count < x) {
        prev = current;
        current = current.next;
        count++;
    }

    // If x is greater than the length of the list
    if (!current) {
        return head;
    }

    // Delete the xth node
    prev.next = current.next;

    return head;
}

// Example usage:
// Create linked list: 1 -> 3 -> 4
let head1 = new Node(1);
head1.next = new Node(3);
head1.next.next = new Node(4);

// Delete node at position 3
let newHead1 = deleteNode(head1, 3);

// Print the resulting linked list
while (newHead1) {
    console.log(newHead1.data);
    newHead1 = newHead1.next;
}

// Create linked list: 1 -> 5 -> 2 -> 9
let head2 = new Node(1);
head2.next = new Node(5);
head2.next.next = new Node(2);
head2.next.next.next = new Node(9);

// Delete node at position 2
let newHead2 = deleteNode(head2, 2);

// Print the resulting linked list
while (newHead2) {
    console.log(newHead2.data);
    newHead2 = newHead2.next;
}
