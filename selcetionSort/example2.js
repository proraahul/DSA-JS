
function selectionSortLastK(arr, k){

    let n = arr.length;
    for(let i=n-k; i<n; i++){
        let minIndex = i;
        for(let j=i+1;j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex != i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr
}


// Example usage:
 const inputArray = [64, 25, 12, 22, 11];
 const k = 3; // Sort only the first 3 elements
 const sortedArray = selectionSortLastK(inputArray, k);
 console.log("Sorted Array (first k elements):", sortedArray);