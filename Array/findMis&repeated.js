// Find Missing And Repeating:

function findTwoElement(arr, n){
    //your code here
    let repeatingNumber, missingNumber;

// Find the repeating and missing numbers using cyclic sort
let i = 0;
while(i < n){
    if(arr[i] !== arr[arr[i] - 1]){
        // Swap elements to put them in correct position
        [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
    }else{
        i++;
    }
}

// Iterate through the sorted array to find the repeating and missing numbers
for(let i = 0; i < n; i++){
    if(arr[i] !== i + 1){
        repeatingNumber = arr[i];
        missingNumber = i + 1;
        break;
    }
}

return [repeatingNumber, missingNumber];
}

let arr = [1,2,4,4];
let n = 4;
let result = findTwoElement(arr,n);
console.log(result);