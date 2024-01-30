function mergeDescending(arr){

    let mid = Math.floor(arr.length/2);
    let leftHalf = arr.slice(0,mid);
    let rightHalf = arr.slice(mid);

    const sortedLeft = mergeDescending(leftHalf);
    const sortedRight = mergeDescending(rightHalf);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right){

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex<left.index && rightIndex < right.length){
        if(left[leftIndex]>right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    //if we reach here it means that one of the arrays has been fully included in the result array
    //we need to add remaining elements from the other array (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArr = [3,1,4,1,5,9,2,6,5,3,5];
const sortedArr = mergeDescending(unsortedArr);
console.log(sortedArr);