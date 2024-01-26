function removeDups(str){
    //code here
let charSet = new Set();

let result = "";

for (let char of str) {
    if(!charSet.has(char)){
        charSet.add(char);
        result += char;
    }
}

return result;
}

let str = "zvvo";
console.log(removeDups(str)); 