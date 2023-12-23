// Write a program to sort an array of integers in ascending order using selection sort, but only swapping adjacent elements if they are out of order by a certain threshold (e.g., only swap if the difference between the two elements is greater than 10):

function selectionSortWithThreshold(arr, threshold){
    let n = arr.length;
    for(let i=0; i<n; i++){
        let minIndex = i;
        for(let j = i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        //Swap only if the minimum element is not in its correct position
        if(minIndex !== i){
                //Check the threshold condition before swapping
                if(Math.abs(arr[minIndex] - arr[i]) > threshold){
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                }
        }
    }
    return arr;
}


// Example usage:
const inputArray = [64, 25, 12, 22, 11, 40, 5];
const threshold = 10;
const sortedArray = selectionSortWithThreshold([...inputArray], threshold);
console.log("Sorted Array with Threshold:", sortedArray);
