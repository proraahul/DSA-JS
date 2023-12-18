// write a program to implement the backtracking algorithm using a stack in javascript

class Backtracking {
    constructor(elements) {
      this.elements = elements;
      this.result = [];
      this.stack = [];
    }
  
    findAllCombinations() {
      this.backtrack(0);
      return this.result;
    }
  
    backtrack(index) {
      if (index === this.elements.length) {
        this.result.push([...this.stack]);
        return;
      }
  
      // Include the current element in the combination
      this.stack.push(this.elements[index]);
      this.backtrack(index + 1);
  
      // Exclude the current element from the combination
      this.stack.pop();
      this.backtrack(index + 1);
    }
  }
  
  // Example usage:
  const elements = [1, 2, 3];
  const backtrackingInstance = new Backtracking(elements);
  const combinations = backtrackingInstance.findAllCombinations();
  
  console.log("All Combinations:", combinations);
  
