function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function getPrecedence(operator) {
    switch (operator) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      default:
        return 0;
    }
  }
  
  function infixToPostfix(infixExpression) {
    const stack = [];
    let postfix = '';
  
    for (let i = 0; i < infixExpression.length; i++) {
      const currentChar = infixExpression[i];
  
      if(/[a-zA-Z0-9]/.test(currentChar)){
        // Operand, append to postfix
        postfix += currentChar;
      }else if (isOperator(currentChar)){
        // Operator, pop higher or equal precedence operators from stack and then push current operator
        while(stack.length > 0 && getPrecedence(stack[stack.length - 1]) >= getPrecedence(currentChar)){
          postfix += stack.pop();
        }
        stack.push(currentChar);
      }else if (currentChar === '('){
        // Left parenthesis, push onto stack
        stack.push(currentChar);
      } else if(currentChar === ')'){
        // Right parenthesis, pop operators from stack until a left parenthesis is encountered
        while(stack.length > 0 && stack[stack.length - 1] !== '('){
          postfix += stack.pop();
        }
        stack.pop(); // Pop the left parenthesis
      }
    }
  
    // Pop any remaining operators from the stack and append to postfix
    while (stack.length > 0) {
      postfix += stack.pop();
    }
  
    return postfix;
  }
  
  // Example usage:
  const infixExpression = "a+b*c-(d/e+f*g)";
  const postfixExpression = infixToPostfix(infixExpression);
  
  console.log(`Infix Expression: ${infixExpression}`);
  console.log(`Postfix Expression: ${postfixExpression}`);
  