// Write a program to sort an array of integers in ascending order using selection sort, but stop sorting once a certain number of swaps have been performed:

function selectionSortWithSwapsLimit(arr, maxSwaps){
    let n = arr.length;
    let swapCount = 0;
    for(let i=0; i<n-1 && swapCount < maxSwaps; i++){
        let minIndex = i;
        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swapCount++;
        }
    }
    return arr;
}

// Example usage:
const inputArray = [64, 25, 12, 22, 11];
const maxSwaps = 2; // Limit the number of swaps to 2
const sortedArray = selectionSortWithSwapsLimit(inputArray, maxSwaps);
console.log("Sorted Array (limited swaps):", sortedArray);