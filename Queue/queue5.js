// write a program to implement a circular queue in javascript:

class CircularQueue {
    constructor(maxSize) {
      this.maxSize = maxSize;
      this.queue = new Array(maxSize);
      this.front = -1;
      this.rear = -1;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.front === -1;
    }

    // Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.maxSize === this.front;
    }

    // Enqueue an element to the rear of the queue
    enqueue(element) {
    if (this.isFull()) {
        console.log("Queue is full. Cannot enqueue element.");
        return;
    }
  
    if (this.isEmpty()) {
        this.front = 0;
    }
  
    this.rear = (this.rear + 1) % this.maxSize;
    this.queue[this.rear] = element;
    console.log(`${element} enqueued to the queue.`);
    }
  
    // Dequeue an element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty. Cannot dequeue element.");
        return;
      }
  
      const dequeuedElement = this.queue[this.front];
  
      if (this.front === this.rear) {
        // Reset front and rear when the last element is dequeued
        this.front = -1;
        this.rear = -1;
      } else {
        this.front = (this.front + 1) % this.maxSize;
      }
  
      console.log(`${dequeuedElement} dequeued from the queue.`);
      return dequeuedElement;
    }
  
    // Display the elements of the queue
    display() {
      if (this.isEmpty()) {
        console.log("Queue is empty.");
        return;
      }
  
      let displayString = "Elements in the queue: ";
      let i = this.front;
  
      do {
        displayString += this.queue[i] + " ";
        i = (i + 1) % this.maxSize;
      } while (i !== (this.rear + 1) % this.maxSize);
  
      console.log(displayString.trim());
    }
  }
  
  // Example usage
  const maxSize = 5;
  const circularQueue = new CircularQueue(maxSize);
  
  circularQueue.enqueue(1);
  circularQueue.enqueue(2);
  circularQueue.enqueue(3);
  circularQueue.display(); // Output: Elements in the queue: 1 2 3
  
  circularQueue.dequeue();
  circularQueue.display(); // Output: Elements in the queue: 2 3
  
  circularQueue.enqueue(4);
  circularQueue.enqueue(5);
  circularQueue.enqueue(6); 
  
  circularQueue.display(); // Output: Elements in the queue: 2 3 4 5 6
  

