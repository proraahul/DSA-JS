function ispar(x){
    //your code here
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];

for(let i = 0; i < x.length; i++){
const currentBracket = x[i];

if(openBrackets.includes(currentBracket)){
  stack.push(currentBracket);
}else if (closeBrackets.includes(currentBracket)){
  const lastOpenBracket = stack.pop();

  if(!lastOpenBracket || openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(currentBracket)){
    return false;
  }
}
}

return stack.length === 0;
};

let input = '{([])}';
console.log(ispar(input));