// write a program to implement a priority queue using a linked list in javascript:

class Node{
    constructor(element, priority){
      this.element = element;
      this.priority = priority;
      this.next = null;
    }
  }
  
  class PriorityQueue{
    constructor() {
      this.front = null;
    }
  
    // Enqueue an element with a given priority
    enqueue(element, priority){
      const newNode = new Node(element, priority);
  
      if(!this.front || priority < this.front.priority){
        newNode.next = this.front;
        this.front = newNode;
      } else {
        let current = this.front;
  
        while(current.next && priority >= current.next.priority){
          current = current.next;
        }
  
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  
    // Dequeue the element with the highest priority
    dequeue(){
      if(!this.front){
        return "Queue is empty";
      }
  
      const dequeuedElement = this.front.element;
      this.front = this.front.next;
  
      return dequeuedElement;
    }
  
    // Check if the priority queue is empty
    isEmpty(){
      return !this.front;
    }
  
    // Return the size of the priority queue
    size() {
      let count = 0;
      let current = this.front;
  
      while (current) {
        count++;
        current = current.next;
      }
  
      return count;
    }
  
    // Display the elements of the priority queue
    display() {
      if (this.isEmpty()) {
        console.log("Priority queue is empty.");
        return;
      }
  
      console.log("Priority queue elements:");
      let current = this.front;
  
      while (current) {
        console.log(`Element: ${current.element}, Priority: ${current.priority}`);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const priorityQueue = new PriorityQueue();
  
  priorityQueue.enqueue("Task 1", 3);
  priorityQueue.enqueue("Task 2", 1);
  priorityQueue.enqueue("Task 3", 2);
  
  priorityQueue.display();
  // Output:
  // Priority queue elements:
  // Element: Task 2, Priority: 1
  // Element: Task 3, Priority: 2
  // Element: Task 1, Priority: 3
  
  console.log("\nDequeued:", priorityQueue.dequeue()); // Output: Dequeued:
  

