const isPalindrome =(str) => {
    str = str.toLowerCase();
    str = str.toLowerCase().replace(/\W/g, "");
    let r_str = str.split('').reverse().join('');
    // return r_str;

   return str === r_str ? true : false;

}

let str = 'madam';
let str2 = 'hello';
let str3 = 'A man, a plan, a canal, Panama'
console.log(isPalindrome(str));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));