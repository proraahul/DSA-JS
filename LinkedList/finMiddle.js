class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

 getMiddle(node){
    //your code here
    if(!this.data){
    return null;
}

let slow = head;
let fast = head;

while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
}

return slow.data;
}
}

// Example usage:
const head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);

console.log(getMiddle(head1));  // Output: 3

const head2 = new Node(2);
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(7);
head2.next.next.next.next = new Node(5);
head2.next.next.next.next.next = new Node(1);

console.log(getMiddle(head2));  // Output: 7