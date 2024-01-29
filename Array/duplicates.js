function remove_duplicate(arr,n){
    //code here
    if(n === 0 || n === 1){
    return n;
}

let j = 0;
for(let i = 0; i < n-1; i++){
    if(arr[i] !== arr[i + 1]){
        arr[j] = arr[i];
        j++;
    }
}

// Add the last element to the array
arr[j] = arr[n-1];
j++;

return j; // Numbe
}

let arr = [2, 2, 2, 2, 2];
let n = 5;
let result = remove_duplicate(arr, n)
console.log(result);