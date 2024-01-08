function binarySearchLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target){
            // Found a match, update result and continue searching in the right subarray
            result = mid;
            left = mid + 1;
        }else if (arr[mid] < target){
            // Continue searching in the right subarray
            left = mid + 1;
        }else{
            // Continue searching in the left subarray
            right = mid - 1;
        }
    }

    return result;
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 4, 4, 5, 6, 7];
const searchValue = 4;
const resultIndex = binarySearchLastOccurrence(sortedArray, searchValue);

if (resultIndex !== -1) {
    console.log(`The last occurrence of ${searchValue} is at index ${resultIndex}.`);
} else {
    console.log(`${searchValue} is not found in the array.`);
}
