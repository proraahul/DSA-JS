// write a program to evaluate a postfix expression using a stack in javascript

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function evaluatePostfix(postfixExpression) {
    const stack = [];
  
    for (let i = 0; i < postfixExpression.length; i++) {
      const currentChar = postfixExpression[i];
  
      if (/[\d]/.test(currentChar)) {
        // Operand, push onto stack
        stack.push(Number(currentChar));
      } else if (isOperator(currentChar)) {
        // Operator, pop operands from stack, perform operation, and push result back onto stack
        const operand2 = stack.pop();
        const operand1 = stack.pop();
  
        switch (currentChar) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
        }
      }
    }
  
    // The final result should be on the top of the stack
    return stack.pop();
  }
  
  // Example usage:
  const postfixExpression = "23*5+";
  const result = evaluatePostfix(postfixExpression);
  
  console.log(`Postfix Expression: ${postfixExpression}`);
  console.log(`Result: ${result}`);
  