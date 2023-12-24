function insertionSort(arr, n){
    for(let i=1; i<arr.length; i++){
        let j= i-1;
        let temp = arr[i];

        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

const arr = [5,2,8,3,1,6];
let n = arr.length;
const sortedArr = insertionSort(arr, n);
console.log(sortedArr);