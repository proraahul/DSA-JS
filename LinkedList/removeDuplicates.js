// Remove duplicates from unsorted list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function removeDuplicates(head) {
    if (!head || !head.next) {
        return head;
    }

    let seen = new Set();
    let current = head;
    let prev = null;

    while (current) {
        if (seen.has(current.data)) {
            // Duplicate found, remove the node
            prev.next = current.next;
        } else {
            seen.add(current.data);
            prev = current;
        }

        current = current.next;
    }

    return head;
}

// Example usage:
// Create linked list: 5 -> 2 -> 2 -> 4
let head = new Node(5);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(4);

// Remove duplicates
let newHead = removeDuplicates(head);

// Print the resulting linked list
while (newHead) {
    console.log(newHead.data);
    newHead = newHead.next;
}
