function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high){
    let pivot = arr[high];
    i = (low-1);
    for(let j=low;j<=high;j++){
        if(arr[j]<pivot) {
            i++;
            swap(arr, i, j);
        }
        swap(arr, i+1, high);
        return (i+1);
    }
}

function quickSort(arr, low, high){
    if(low<high){

        let pi = partition(arr, low, high);
        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, high);
    }
    return arr;
}

const arr = [10,7,3,6,9,8];
let n = arr.length;
const result = quickSort(arr, 1, n);
console.log(result)