// reverse number using string Reversal
let num1 = 12050709; 
let result = num1.toString().split('').reverse().join(''); 
// console.log(result);

// reverse using array reduce method:
function reverseFunction(num) {
    let digits = Array.from(String(num), Number);
    let reversedArray = digits.reduce((acc, digit) =>
        [digit, ...acc], []);
    return parseInt(reversedArray.join(''));
}; 
console.log(reverseFunction(8158182348));


// using string iteration:
function reverseFunction(num) { 
	let numStr = num.toString(); 
	let reversedStr = ''; 
	for (let i = numStr.length - 1; i >= 0; i--) { 
		reversedStr += numStr[i]; l
	} 
	return parseInt(reversedStr); 
} 
let num = 987654321; 
let reversedNum = reverseFunction(num); 
// console.log(reversedNum);


// using recursion
function reverseFunction(num, reversed = 0) { 
	if (num === 0) { 
		return reversed; 
	} 
	return reverseFunction(Math.floor(num / 10), 
		reversed * 10 + num % 10); 
} 
const number = 987654321; 
// const result1 = reverseFunction(number); 
// console.log(result1);



function reverseNum(num){
    let reverse = 0;

    while(num != 0){
        reverse = reverse * 10; 
        reverse = reverse + num%10;
        num = parseInt(num/10);
    }
    return reverse;
}

let result1 = reverseNum(12134);
console.log(result1);