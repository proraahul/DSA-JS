/* Find an element using Binary Search
*The recurse approach for Binary search in a sorted array as follows the steps:
!- if low > high, the element is not found hence -1 is returned.
!- else if search element x == arr[mid], the element is found, hence mid is returned.
!- else if x > arr[mid], search element is expected to be present between mid+1 and high index.
!- else search element is expected to be present between low and mid-1.
*/


let arr = [2, 16, 23, 33, 41, 51, 73];
let x = 33;

function findElement(arr, x, low, high){
  let mid = low+high/2;
  if(low > high){
    return -1;
  }
  else{
    if(x == arr[mid]){
        return mid;
    }else if(x > arr[mid]){
        return findElement(arr, x, mid+1, high);
    }
    else{
        return findElement(arr, x, low, mid-1);
    }
  }
}

function searchElement(arr, x){
    const index = findElement(arr, x, 0, arr.length-1);
    console.log(`${x} is found at index ${index}`);
}

searchElement(arr, x);