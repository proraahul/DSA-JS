// write a program to check if a string of brackets is balanced using a stack in javascript?
function isBalanced(str) {
    // Initialize an empty stack to keep track of opening brackets
    const stack = [];
  
    // Define a mapping of closing brackets to their corresponding opening brackets
    const brackets = {
      '}': '{',
      ']': '[',
      ')': '('
    };
  
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
  
      // If the current character is a closing bracket
      if (brackets[currentChar]) {
        // Pop the top element from the stack (if the stack is not empty)
        const topOfStack = stack.pop();
  
        // Check if the popped opening bracket matches the expected opening bracket
        if (brackets[currentChar] !== topOfStack) {
          return false; // Unbalanced brackets
        }
      } else {
        // If it's an opening bracket, push it onto the stack
        stack.push(currentChar);
      }
    }
  
    // The string is balanced if the stack is empty at the end
    return stack.length === 0;
  }
  
  // Example usage:
  const balancedString = "{[()]}";
  const unbalancedString = "{[(])}";
  
  console.log(`Is "${balancedString}" balanced?`, isBalanced(balancedString)); // Output: true
  console.log(`Is "${unbalancedString}" balanced?`, isBalanced(unbalancedString)); // Output: false
  