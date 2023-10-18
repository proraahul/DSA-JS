function checkPalindrome(str){
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)!= str.charAt(str.length-i-1)){
           return false; 
        }
    }
    return true;
}

console.log(checkPalindrome('banana'));
console.log(checkPalindrome('racecar'));
console.log(checkPalindrome('madam'));