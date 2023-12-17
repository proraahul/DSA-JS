class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Peek at the top element of the stack without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack:", stack.items); // Output: [1, 2, 3]
  
  console.log("Pop:", stack.pop()); // Output: 3
  console.log("Stack after pop:", stack.items); // Output: [1, 2]
  
  console.log("Peek:", stack.peek()); // Output: 2
  
  console.log("Is Empty:", stack.isEmpty()); // Output: false
  
  console.log("Size:", stack.size()); // Output: 2
  
  stack.clear();
  console.log("Stack after clear:", stack.items); // Output: []
  