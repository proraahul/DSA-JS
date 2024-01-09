function isPalindrome(str){

  const cleanStr = str.toLowerCase();

  let left = 0;
  let right = cleanStr.length - 1;

  while(left < right){
    if(cleanStr[left] !== cleanStr[right]){
      return 'not palindrome'; 
    }
    left++;
    right--;
  }
  return 'palindrome';

}

let str = 'maam';
const result = isPalindrome(str);
console.log(result);
