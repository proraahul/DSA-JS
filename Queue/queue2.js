// write a program to reverse a queue using stack in js

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items.join(' '));
    }
  }
  
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  }
  
  // Function to reverse a queue using a stack
  function reverseQueue(queue) {
    const stack = new Stack();
  
    // Dequeue all elements from the queue and push onto the stack
    while (!queue.isEmpty()) {
      stack.push(queue.dequeue());
    }
  
    // Pop elements from the stack and enqueue back into the queue
    while (!stack.isEmpty()) {
      queue.enqueue(stack.pop());
    }
  }
  
  // Example usage
  const myQueue = new Queue();
  
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  myQueue.enqueue(4);
  
  console.log("Original Queue:");
  myQueue.print(); // Output: 1 2 3 4
  
  reverseQueue(myQueue);
  
  console.log("\nReversed Queue:");
  myQueue.print(); // Output: 4 3 2 1
  