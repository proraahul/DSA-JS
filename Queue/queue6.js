// write a program to implement a priority queue using an array in javascript:

class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    // Enqueue an element with a given priority
    enqueue(element, priority){
      const item = { element, priority };
      let added = false;
  
      for (let i = 0; i < this.queue.length; i++) {
        if (priority < this.queue[i].priority) {
          this.queue.splice(i, 0, item);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.queue.push(item);
      }
    }
  
    // Dequeue the element with the highest priority
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue.shift().element;
    }
  
    // Check if the priority queue is empty
    isEmpty() {
      return this.queue.length === 0;
    }
  
    // Return the size of the priority queue
    size() {
      return this.queue.length;
    }
  
    // Display the elements of the priority queue
    display() {
      if (this.isEmpty()) {
        console.log("Priority queue is empty.");
        return;
      }
  
      console.log("Priority queue elements:");
      this.queue.forEach((item) => {
        console.log(`Element: ${item.element}, Priority: ${item.priority}`);
      });
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
  
  console.log("\nDequeued:", priorityQueue.dequeue()); // Output: Dequeued: Task 2
  
  priorityQueue.display();
  // Output:
  // Priority queue elements:
  // Element: Task 3, Priority: 2
  // Element: Task 1, Priority: 3
  