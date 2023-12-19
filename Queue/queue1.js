// implement a queue in js
class Queue {
    constructor() {
      this.items = [];
    }
  
    // Add element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the front element of the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Return the front element without removing it
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the elements of the queue
    print() {
      console.log(this.items.join(' '));
    }
  }
  
  // Example usage
  const myQueue = new Queue();
  
  myQueue.enqueue(10);
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  
  myQueue.print(); // Output: 10 20 30
  
  console.log("Front element:", myQueue.front()); // Output: Front element: 10
  
  myQueue.dequeue();
  
  myQueue.print(); // Output: 20 30
  