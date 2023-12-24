function insertionSort(arr, n){
    let key;
    for(i=0;i<n;i++){
        key = arr[i];
        j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
}
// utility function to print an array of size n:
function printArray(arr, n){
    let i;
    for(i=0;i<n;i++){
        console.log(arr[i]);
    }
}

// drive code:
let arr = [12,11,13,5,6];
 let n = arr.length;

 insertionSort(arr, n);
 printArray(arr, n);