function findMax(arr, n) {
    // write your code here
    arr.sort((a,b)=> a-b);
    return arr[arr.length-1];
}


let arr = [1, 8, 7, 56, 90];
let n = 5;
let result = findMax(arr, n)
console.log(result);