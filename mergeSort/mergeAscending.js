function mergeSort(arr){

    if(arr.length<=1){
        return arr;
    }

    let mid = Math.floor(arr.length/2);  //get the middle index of array
    let leftHalf = arr.slice(0,mid);    //get the elements in first half of array
    let rightHalf = arr.slice(mid);     //get the element in second half of array

    //recursively call mergeSort on both halves and then merging them
    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right){
    let result =[];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]); //add smaller element from left to resultant array
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // append any remaining elements from both array:
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArr = [3,1,4,1,5,9,2,6,5,3,5];
const sortedArr = mergeSort(unsortedArr);
console.log(sortedArr);