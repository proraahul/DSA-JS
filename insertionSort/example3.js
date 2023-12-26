// write a function to sort a linked list using imsertion sort in javascript:

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    printList() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data + " ");
        current = current.next;
      }
    }
  
    insertionSort() {
      let sorted = null;
      let current = this.head;
  
      while (current !== null) {
        const next = current.next;
        sorted = this.sortedInsert(sorted, current);
        current = next;
      }
  
      this.head = sorted;
    }
  
    sortedInsert(head, newNode) {
      if (head === null || head.data >= newNode.data) {
        newNode.next = head;
        return newNode;
      }
  
      let current = head;
      while (current.next !== null && current.next.data < newNode.data) {
        current = current.next;
      }
  
      newNode.next = current.next;
      current.next = newNode;
  
      return head;
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  linkedList.insert(5);
  linkedList.insert(3);
  linkedList.insert(8);
  linkedList.insert(1);
  linkedList.insert(6);
  
  console.log("Original Linked List:");
  linkedList.printList();
  
  linkedList.insertionSort();
  
  console.log("\nLinked List after Insertion Sort:");
  linkedList.printList();
  

