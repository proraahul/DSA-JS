// write a program to reverse traversing in singly linked list in javascript:

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
  
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
  
      current.next = newNode;
    }
  
    reverseTraverse() {
      const result = [];
      let current = this.head;
  
      while (current) {
        result.unshift(current.data); // Insert at the beginning of the array
        current = current.next;
      }
  
      return result;
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.append(4);
  
  const reversedList = linkedList.reverseTraverse();
  
  console.log("Reversed List:", reversedList);
  // Output: Reversed List: [4, 3, 2, 1]
  