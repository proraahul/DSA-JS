// write a program to implement the browser back button using a stack in javascript

class BrowserHistory {
    constructor() {
      this.pageStack = [];
    }
  
    // Visit a new page and push it onto the stack
    visitPage(page) {
      console.log(`Visiting page: ${page}`);
      this.pageStack.push(page);
    }
  
    // Simulate the browser back button by popping the last visited page
    goBack() {
      if (this.pageStack.length > 1) {
        // Pop the current page
        const currentPage = this.pageStack.pop();
        console.log(`Going back from page: ${currentPage}`);
        
        // Get the previous page without popping it
        const previousPage = this.pageStack[this.pageStack.length - 1];
        console.log(`Current page after going back: ${previousPage}`);
  
        return previousPage;
      } else {
        console.log("Cannot go back further. At the beginning.");
        return null;
      }
    }
  
    // Get the current state of the visited pages
    getCurrentState() {
      return this.pageStack.slice();
    }
  }
  
  // Example usage:
  const browserHistory = new BrowserHistory();
  
  browserHistory.visitPage("Home");
  browserHistory.visitPage("About");
  browserHistory.visitPage("Contact");
  
  console.log("Current state:", browserHistory.getCurrentState());
  
  browserHistory.goBack();
  console.log("After going back:", browserHistory.getCurrentState());
  
  browserHistory.goBack();
  console.log("After going back again:", browserHistory.getCurrentState());
  