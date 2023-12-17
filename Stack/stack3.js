// write a function to reverse a string using a stack in javascript:

function reverseString(inputString) {
    const stack = [];
    
    // Push each character onto the stack
    for (let i = 0; i < inputString.length; i++) {
      stack.push(inputString[i]);
    }
  
    // Pop each character from the stack to reverse the string
    let reversedString = '';
    while (stack.length > 0) {
      reversedString += stack.pop();
    }
  
    return reversedString;
  }
  
  // Example usage:
  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);
  
  console.log(`Original String: ${originalString}`);
  console.log(`Reversed String: ${reversedString}`);
  