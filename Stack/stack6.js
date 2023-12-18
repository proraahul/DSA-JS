// write a program to implement the undo operation using a stack in javascript
class UndoStack {
    constructor() {
      this.stack = [];
    }
  
    // Perform an action and push it onto the stack
    doAction(action) {
      console.log(`Performing action: ${action}`);
      this.stack.push(action);
    }
  
    // Undo the last action by popping it from the stack
    undo() {
      if (this.stack.length === 0) {
        console.log("Nothing to undo");
        return null;
      }
  
      const lastAction = this.stack.pop();
      console.log(`Undoing action: ${lastAction}`);
      return lastAction;
    }
  
    // Get the current state of the stack
    getState() {
      return this.stack.slice();
    }
  }
  
  // Example usage:
  const undoStack = new UndoStack();
  
  undoStack.doAction("Type text: 'Hello'");
  undoStack.doAction("Delete text: 'Hello'");
  undoStack.doAction("Insert text: 'World'");
  
  console.log("Current state:", undoStack.getState());
  
  undoStack.undo();
  console.log("After undo:", undoStack.getState());
  