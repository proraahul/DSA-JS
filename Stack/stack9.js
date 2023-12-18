// write a program to implement the browser forward button using a stack in javascript

class BrowserHistory {
    constructor() {
      this.historyStack = [];
      this.forwardStack = [];
      this.currentPage = null;
    }
  
    // Navigate to a new page and push it onto the history stack
    goToPage(page) {
      console.log(`Navigating to page: ${page}`);
      this.historyStack.push(page);
      this.currentPage = page;
      // Clear the forward stack after navigating to a new page
      this.forwardStack = [];
    }
  
    // Go back to the previous page
    goBack() {
      if (this.historyStack.length > 1) {
        const currentPage = this.historyStack.pop();
        this.forwardStack.push(currentPage);
        this.currentPage = this.historyStack[this.historyStack.length - 1];
        console.log(`Going back to page: ${this.currentPage}`);
        return this.currentPage;
      } else {
        console.log("No page to go back to");
        return null;
      }
    }
  
    // Go forward to the next page
    goForward() {
      if (this.forwardStack.length > 0) {
        const nextPage = this.forwardStack.pop();
        this.historyStack.push(nextPage);
        this.currentPage = nextPage;
        console.log(`Going forward to page: ${nextPage}`);
        return nextPage;
      } else {
        console.log("No page to go forward to");
        return null;
      }
    }
  
    // Get the current state of the history and forward stacks
    getState() {
      return {
        historyStack: this.historyStack.slice(),
        forwardStack: this.forwardStack.slice(),
        currentPage: this.currentPage
      };
    }
  }
  
  // Example usage:
  const browserHistory = new BrowserHistory();
  
  browserHistory.goToPage("Home");
  browserHistory.goToPage("About");
  browserHistory.goToPage("Contact");
  
  console.log("Current state:", browserHistory.getState());
  
  browserHistory.goBack();
  console.log("After going back:", browserHistory.getState());
  
  browserHistory.goForward();
  console.log("After going forward:", browserHistory.getState());
  