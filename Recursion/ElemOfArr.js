let arr = [2, 12, 34, 54, 41];

function printElemOfArr(arr, i){
    if(i >= arr.length){
        return;
    }
    console.log(`Element at index ${i} is ${arr[i]}`);
    printElemOfArr(arr, i+1)
}

printElemOfArr(arr, 0);