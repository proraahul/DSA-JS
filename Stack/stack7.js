//!write a program to implement the redo operation using a stack in javascript

class UndoRedoStack {
    constructor() {
      this.undoStack = [];
      this.redoStack = [];
    }
  
    // Perform an action and push it onto the undo stack
    doAction(action) {
      console.log(`Performing action: ${action}`);
      this.undoStack.push(action);
      // Clear the redo stack after performing a new action
      this.redoStack = [];
    }
  
    // Undo the last action by popping it from the undo stack and pushing it onto the redo stack
    undo() {
      if (this.undoStack.length === 0) {
        console.log("Nothing to undo");
        return null;
      }
  
      const lastAction = this.undoStack.pop();
      console.log(`Undoing action: ${lastAction}`);
      this.redoStack.push(lastAction);
      return lastAction;
    }
  
    // Redo the last undone action by popping it from the redo stack and pushing it onto the undo stack
    redo() {
      if (this.redoStack.length === 0) {
        console.log("Nothing to redo");
        return null;
      }
  
      const lastUndoneAction = this.redoStack.pop();
      console.log(`Redoing action: ${lastUndoneAction}`);
      this.undoStack.push(lastUndoneAction);
      return lastUndoneAction;
    }
  
    // Get the current state of the undo and redo stacks
    getState() {
      return {
        undoStack: this.undoStack.slice(),
        redoStack: this.redoStack.slice()
      };
    }
  }
  
  // Example usage:
  const undoRedoStack = new UndoRedoStack();
  
  undoRedoStack.doAction("Type text: 'Hello'");
  undoRedoStack.doAction("Delete text: 'Hello'");
  undoRedoStack.doAction("Insert text: 'World'");
  
  console.log("Current state:", undoRedoStack.getState());
  
  undoRedoStack.undo();
  console.log("After undo:", undoRedoStack.getState());
  
  undoRedoStack.redo();
  console.log("After redo:", undoRedoStack.getState());
  