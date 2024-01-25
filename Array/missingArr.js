function missingNumber(arr, n){
    //your code here
let posArr = arr.filter(num => num > 0);

for(let i = 0; i<posArr.length; i++){
    let index = Math.abs(posArr[i]) - 1;
    if(index<posArr.length && posArr[index]>0){
        posArr[index] = -posArr[index];
    }
}

for(let i = 0; i < posArr.length; i++){
    if(posArr[i] > 0){
        return i + 1;
    }
}

// If all indices have negative numbers, return the next positive number
return posArr.length + 1;
}
let arr = [1,2,3,4,5];
let n = 5;
let result = missingNumber(arr,n)
console.log(result);