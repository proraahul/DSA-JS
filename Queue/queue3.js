//write a program to find the minimum element in a queue in javascript:

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
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
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
  
  // Function to find the minimum element in a queue
  function findMinimumElement(queue){
    
    if(queue.isEmpty())
    return 'underflow'

    let minValue = queue.front();

    while(!queue.isEmpty()){
        let currentValue= queue.dequeue();
        if(currentValue < minValue){
            minValue = currentValue;
        }
    }
    return minValue
  }
  
  // Example usage
  const myQueue = new Queue();
  
  myQueue.enqueue(5);
  myQueue.enqueue(3);
  myQueue.enqueue(7);
  myQueue.enqueue(2);
  
  console.log("Original Queue:");
  myQueue.print(); // Output: 5 3 7 2
  
  const minElement = findMinimumElement(myQueue);
  console.log("\nMinimum Element:", minElement); // Output: Minimum Element: 2
  